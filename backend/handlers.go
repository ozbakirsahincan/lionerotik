package main

import (
	"github.com/gofiber/fiber/v2"
)

// Category handlers
func getCategories(c *fiber.Ctx) error {
	var categories []Category
	result := db.Where("is_active = ?", true).Order("sort_order, name").Find(&categories)
	if result.Error != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to fetch categories"})
	}
	return c.JSON(categories)
}

func getCategory(c *fiber.Ctx) error {
	id := c.Params("id")
	var category Category
	result := db.Preload("Products").First(&category, id)
	if result.Error != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Category not found"})
	}
	return c.JSON(category)
}

func getCategoryProducts(c *fiber.Ctx) error {
	id := c.Params("id")
	var products []Product
	result := db.Where("category_id = ? AND is_active = ?", id, true).Find(&products)
	if result.Error != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to fetch products"})
	}
	return c.JSON(products)
}

// Product handlers
func getProducts(c *fiber.Ctx) error {
	var products []Product
	result := db.Where("is_active = ?", true).Find(&products)
	if result.Error != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to fetch products"})
	}
	return c.JSON(products)
}

func getProduct(c *fiber.Ctx) error {
	id := c.Params("id")
	var product Product
	result := db.Preload("Category").Preload("Images").First(&product, id)
	if result.Error != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Product not found"})
	}
	return c.JSON(product)
}

func searchProducts(c *fiber.Ctx) error {
	query := c.Query("q")
	if query == "" {
		return c.Status(400).JSON(fiber.Map{"error": "Search query is required"})
	}

	var products []Product
	result := db.Where("name ILIKE ? OR description ILIKE ?", "%"+query+"%", "%"+query+"%").
		Where("is_active = ?", true).Find(&products)
	if result.Error != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to search products"})
	}
	return c.JSON(products)
}

func getFeaturedProducts(c *fiber.Ctx) error {
	var products []Product
	result := db.Where("is_featured = ? AND is_active = ?", true, true).
		Limit(10).Find(&products)
	if result.Error != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to fetch featured products"})
	}
	return c.JSON(products)
}

// User handlers
func registerUser(c *fiber.Ctx) error {
	var user User
	if err := c.BodyParser(&user); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request body"})
	}

	// Hash password
	hashedPassword, err := hashPassword(user.Password)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to hash password"})
	}
	user.Password = hashedPassword

	result := db.Create(&user)
	if result.Error != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to create user"})
	}

	// Generate JWT token
	token, err := generateJWT(user.ID)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to generate token"})
	}

	return c.JSON(fiber.Map{
		"user":  user,
		"token": token,
	})
}

func loginUser(c *fiber.Ctx) error {
	var loginData struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	if err := c.BodyParser(&loginData); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request body"})
	}

	var user User
	result := db.Where("email = ?", loginData.Email).First(&user)
	if result.Error != nil {
		return c.Status(401).JSON(fiber.Map{"error": "Invalid credentials"})
	}

	if !checkPasswordHash(loginData.Password, user.Password) {
		return c.Status(401).JSON(fiber.Map{"error": "Invalid credentials"})
	}

	// Generate JWT token
	token, err := generateJWT(user.ID)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to generate token"})
	}

	return c.JSON(fiber.Map{
		"user":  user,
		"token": token,
	})
}

func getProfile(c *fiber.Ctx) error {
	userID := c.Locals("user_id").(uint)
	var user User
	result := db.First(&user, userID)
	if result.Error != nil {
		return c.Status(404).JSON(fiber.Map{"error": "User not found"})
	}
	return c.JSON(user)
}

func updateProfile(c *fiber.Ctx) error {
	userID := c.Locals("user_id").(uint)
	var user User
	result := db.First(&user, userID)
	if result.Error != nil {
		return c.Status(404).JSON(fiber.Map{"error": "User not found"})
	}

	var updateData User
	if err := c.BodyParser(&updateData); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request body"})
	}

	// Update fields
	user.Name = updateData.Name
	user.Phone = updateData.Phone
	user.Address = updateData.Address
	user.City = updateData.City

	result = db.Save(&user)
	if result.Error != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to update profile"})
	}

	return c.JSON(user)
}

// Order handlers
func createOrder(c *fiber.Ctx) error {
	userID := c.Locals("user_id").(uint)
	var order Order
	if err := c.BodyParser(&order); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request body"})
	}

	order.UserID = userID
	result := db.Create(&order)
	if result.Error != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to create order"})
	}

	return c.JSON(order)
}

func getOrders(c *fiber.Ctx) error {
	userID := c.Locals("user_id").(uint)
	var orders []Order
	result := db.Where("user_id = ?", userID).Preload("Items.Product").Find(&orders)
	if result.Error != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to fetch orders"})
	}
	return c.JSON(orders)
}

func getOrder(c *fiber.Ctx) error {
	userID := c.Locals("user_id").(uint)
	orderID := c.Params("id")

	var order Order
	result := db.Where("id = ? AND user_id = ?", orderID, userID).
		Preload("Items.Product").First(&order)
	if result.Error != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Order not found"})
	}
	return c.JSON(order)
}

// Cart handlers
func getCart(c *fiber.Ctx) error {
	userID := c.Locals("user_id").(uint)
	var cartItems []Cart
	result := db.Where("user_id = ?", userID).Preload("Product").Find(&cartItems)
	if result.Error != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to fetch cart"})
	}
	return c.JSON(cartItems)
}

func addToCart(c *fiber.Ctx) error {
	userID := c.Locals("user_id").(uint)
	var cartItem Cart
	if err := c.BodyParser(&cartItem); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request body"})
	}

	cartItem.UserID = userID
	result := db.Create(&cartItem)
	if result.Error != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to add to cart"})
	}

	return c.JSON(cartItem)
}

func updateCartItem(c *fiber.Ctx) error {
	userID := c.Locals("user_id").(uint)
	var updateData Cart
	if err := c.BodyParser(&updateData); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request body"})
	}

	var cartItem Cart
	result := db.Where("user_id = ? AND product_id = ?", userID, updateData.ProductID).First(&cartItem)
	if result.Error != nil {
		return c.Status(404).JSON(fiber.Map{"error": "Cart item not found"})
	}

	cartItem.Quantity = updateData.Quantity
	result = db.Save(&cartItem)
	if result.Error != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to update cart item"})
	}

	return c.JSON(cartItem)
}

func removeFromCart(c *fiber.Ctx) error {
	userID := c.Locals("user_id").(uint)
	productID := c.Params("id")

	result := db.Where("user_id = ? AND product_id = ?", userID, productID).Delete(&Cart{})
	if result.Error != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to remove from cart"})
	}

	return c.JSON(fiber.Map{"message": "Item removed from cart"})
}

// Wishlist handlers
func getWishlist(c *fiber.Ctx) error {
	userID := c.Locals("user_id").(uint)
	var wishlistItems []Wishlist
	result := db.Where("user_id = ?", userID).Preload("Product").Find(&wishlistItems)
	if result.Error != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to fetch wishlist"})
	}
	return c.JSON(wishlistItems)
}

func addToWishlist(c *fiber.Ctx) error {
	userID := c.Locals("user_id").(uint)
	var wishlistItem Wishlist
	if err := c.BodyParser(&wishlistItem); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid request body"})
	}

	wishlistItem.UserID = userID
	result := db.Create(&wishlistItem)
	if result.Error != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to add to wishlist"})
	}

	return c.JSON(wishlistItem)
}

func removeFromWishlist(c *fiber.Ctx) error {
	userID := c.Locals("user_id").(uint)
	productID := c.Params("id")

	result := db.Where("user_id = ? AND product_id = ?", userID, productID).Delete(&Wishlist{})
	if result.Error != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Failed to remove from wishlist"})
	}

	return c.JSON(fiber.Map{"message": "Item removed from wishlist"})
}
