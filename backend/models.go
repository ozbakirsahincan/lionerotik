package main

import (
	"time"

	"gorm.io/gorm"
)

// Category model
type Category struct {
	ID          uint      `json:"id" gorm:"primaryKey"`
	Name        string    `json:"name" gorm:"not null"`
	Slug        string    `json:"slug" gorm:"uniqueIndex;not null"`
	Description string    `json:"description"`
	Image       string    `json:"image"`
	Icon        string    `json:"icon"`
	SortOrder   int       `json:"sort_order" gorm:"default:0"`
	IsActive    bool      `json:"is_active" gorm:"default:true"`
	CreatedAt   time.Time `json:"created_at"`
	UpdatedAt   time.Time `json:"updated_at"`
	Products    []Product `json:"products,omitempty" gorm:"foreignKey:CategoryID"`
}

// Product model
type Product struct {
	ID            uint      `json:"id" gorm:"primaryKey"`
	Name          string    `json:"name" gorm:"not null"`
	Slug          string    `json:"slug" gorm:"uniqueIndex;not null"`
	Description   string    `json:"description"`
	ShortDesc     string    `json:"short_desc"`
	Price         float64   `json:"price" gorm:"not null"`
	OriginalPrice float64   `json:"original_price"`
	Discount      int       `json:"discount" gorm:"default:0"`
	SKU           string    `json:"sku" gorm:"uniqueIndex"`
	Brand         string    `json:"brand"`
	Size          string    `json:"size"`
	Color         string    `json:"color"`
	Material      string    `json:"material"`
	Weight        float64   `json:"weight"`
	Dimensions    string    `json:"dimensions"`
	Stock         int       `json:"stock" gorm:"default:0"`
	Rating        float64   `json:"rating" gorm:"default:0"`
	ReviewCount   int       `json:"review_count" gorm:"default:0"`
	IsFeatured    bool      `json:"is_featured" gorm:"default:false"`
	IsActive      bool      `json:"is_active" gorm:"default:true"`
	CategoryID    uint      `json:"category_id"`
	Category      Category  `json:"category,omitempty"`
	Images        []ProductImage `json:"images,omitempty" gorm:"foreignKey:ProductID"`
	CreatedAt     time.Time `json:"created_at"`
	UpdatedAt     time.Time `json:"updated_at"`
}

// ProductImage model
type ProductImage struct {
	ID        uint      `json:"id" gorm:"primaryKey"`
	ProductID uint      `json:"product_id"`
	ImageURL  string    `json:"image_url" gorm:"not null"`
	AltText   string    `json:"alt_text"`
	SortOrder int       `json:"sort_order" gorm:"default:0"`
	IsPrimary bool      `json:"is_primary" gorm:"default:false"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

// User model
type User struct {
	ID        uint      `json:"id" gorm:"primaryKey"`
	Email     string    `json:"email" gorm:"uniqueIndex;not null"`
	Password  string    `json:"-" gorm:"not null"`
	Name      string    `json:"name"`
	Phone     string    `json:"phone"`
	Address   string    `json:"address"`
	City      string    `json:"city"`
	IsActive  bool      `json:"is_active" gorm:"default:true"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
	Orders    []Order   `json:"orders,omitempty" gorm:"foreignKey:UserID"`
}

// Order model
type Order struct {
	ID            uint        `json:"id" gorm:"primaryKey"`
	UserID        uint        `json:"user_id"`
	User          User        `json:"user,omitempty"`
	OrderNumber   string      `json:"order_number" gorm:"uniqueIndex"`
	Status        string      `json:"status" gorm:"default:'pending'"`
	TotalAmount   float64     `json:"total_amount"`
	ShippingCost  float64     `json:"shipping_cost"`
	TaxAmount     float64     `json:"tax_amount"`
	DiscountAmount float64    `json:"discount_amount"`
	PaymentMethod string      `json:"payment_method"`
	ShippingAddress string    `json:"shipping_address"`
	BillingAddress  string    `json:"billing_address"`
	Notes         string      `json:"notes"`
	CreatedAt     time.Time   `json:"created_at"`
	UpdatedAt     time.Time   `json:"updated_at"`
	Items         []OrderItem `json:"items,omitempty" gorm:"foreignKey:OrderID"`
}

// OrderItem model
type OrderItem struct {
	ID        uint    `json:"id" gorm:"primaryKey"`
	OrderID   uint    `json:"order_id"`
	ProductID uint    `json:"product_id"`
	Product   Product `json:"product,omitempty"`
	Quantity  int     `json:"quantity"`
	Price     float64 `json:"price"`
	Discount  float64 `json:"discount"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

// Cart model
type Cart struct {
	ID        uint      `json:"id" gorm:"primaryKey"`
	UserID    uint      `json:"user_id"`
	ProductID uint      `json:"product_id"`
	Product   Product   `json:"product,omitempty"`
	Quantity  int       `json:"quantity"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

// Wishlist model
type Wishlist struct {
	ID        uint      `json:"id" gorm:"primaryKey"`
	UserID    uint      `json:"user_id"`
	ProductID uint      `json:"product_id"`
	Product   Product   `json:"product,omitempty"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

// Review model
type Review struct {
	ID        uint      `json:"id" gorm:"primaryKey"`
	UserID    uint      `json:"user_id"`
	User      User      `json:"user,omitempty"`
	ProductID uint      `json:"product_id"`
	Product   Product   `json:"product,omitempty"`
	Rating    int       `json:"rating" gorm:"not null"`
	Comment   string    `json:"comment"`
	IsActive  bool      `json:"is_active" gorm:"default:true"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

// BeforeCreate hooks
func (o *Order) BeforeCreate(tx *gorm.DB) error {
	if o.OrderNumber == "" {
		o.OrderNumber = generateOrderNumber()
	}
	return nil
}

func generateOrderNumber() string {
	return "ORD-" + time.Now().Format("20060102150405")
} 