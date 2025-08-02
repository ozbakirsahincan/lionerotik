package main

import (
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var db *gorm.DB

func main() {
	// Load environment variables
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found")
	}

	// Initialize database
	initDatabase()

	// Seed database with initial data
	seedDatabase()

	// Create Fiber app
	app := fiber.New(fiber.Config{
		AppName: "Lion Erotik API",
	})

	// Middleware
	app.Use(logger.New())
	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:3000",
		AllowHeaders: "Origin, Content-Type, Accept, Authorization",
		AllowMethods: "GET, POST, PUT, DELETE",
	}))

	// Routes
	setupRoutes(app)

	// Start server
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server starting on port %s", port)
	log.Fatal(app.Listen(":" + port))
}

func initDatabase() {
	dsn := os.Getenv("DATABASE_URL")
	if dsn == "" {
		dsn = "host=localhost user=postgres password=postgres dbname=lionerotik port=5432 sslmode=disable"
	}

	var err error
	db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}

	// Auto migrate models
	err = db.AutoMigrate(
		&Category{},
		&Product{},
		&ProductImage{},
		&User{},
		&Order{},
		&OrderItem{},
		&Cart{},
		&Wishlist{},
		&Review{},
	)
	if err != nil {
		log.Fatal("Failed to migrate database:", err)
	}

	log.Println("Database connected and migrated")
}

func setupRoutes(app *fiber.App) {
	// API routes
	api := app.Group("/api")

	// Categories
	api.Get("/categories", getCategories)
	api.Get("/categories/:id", getCategory)
	api.Get("/categories/:id/products", getCategoryProducts)

	// Products
	api.Get("/products", getProducts)
	api.Get("/products/:id", getProduct)
	api.Get("/products/search", searchProducts)
	api.Get("/products/featured", getFeaturedProducts)

	// Users
	api.Post("/auth/register", registerUser)
	api.Post("/auth/login", loginUser)
	api.Get("/auth/profile", authMiddleware, getProfile)
	api.Put("/auth/profile", authMiddleware, updateProfile)

	// Orders
	api.Post("/orders", authMiddleware, createOrder)
	api.Get("/orders", authMiddleware, getOrders)
	api.Get("/orders/:id", authMiddleware, getOrder)

	// Cart
	api.Get("/cart", authMiddleware, getCart)
	api.Post("/cart/add", authMiddleware, addToCart)
	api.Put("/cart/update", authMiddleware, updateCartItem)
	api.Delete("/cart/remove/:id", authMiddleware, removeFromCart)

	// Wishlist
	api.Get("/wishlist", authMiddleware, getWishlist)
	api.Post("/wishlist/add", authMiddleware, addToWishlist)
	api.Delete("/wishlist/remove/:id", authMiddleware, removeFromWishlist)
}
