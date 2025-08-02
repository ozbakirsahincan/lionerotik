package main

import (
	"log"
)

func seedDatabase() {
	// Categories
	categories := []Category{
		{
			Name:        "Dildolar",
			Slug:        "dildolar",
			Description: "Gerçekçi dildolar ve oyuncaklar",
			Icon:        "🔴",
			SortOrder:   1,
			IsActive:    true,
		},
		{
			Name:        "Seks Makinaları",
			Slug:        "seks-makinalari",
			Description: "Otomatik seks makinaları",
			Icon:        "⚙️",
			SortOrder:   2,
			IsActive:    true,
		},
		{
			Name:        "Belden Bağlama",
			Slug:        "belden-baglama",
			Description: "Harness ve strap-on ürünleri",
			Icon:        "🦴",
			SortOrder:   3,
			IsActive:    true,
		},
		{
			Name:        "Penis Ürünleri",
			Slug:        "penis-urunleri",
			Description: "Penis oyuncakları ve aksesuarları",
			Icon:        "🔵",
			SortOrder:   4,
			IsActive:    true,
		},
		{
			Name:        "Cinsel Eczane",
			Slug:        "cinsel-eczane",
			Description: "Cinsel sağlık ürünleri",
			Icon:        "💊",
			SortOrder:   5,
			IsActive:    true,
		},
		{
			Name:        "Fetiş ve Fantezi",
			Slug:        "fetis-ve-fantezi",
			Description: "Fetiş ve fantezi ürünleri",
			Icon:        "🎭",
			SortOrder:   6,
			IsActive:    true,
		},
		{
			Name:        "Anal Ürünler",
			Slug:        "anal-urunler",
			Description: "Anal oyuncaklar ve aksesuarları",
			Icon:        "🔸",
			SortOrder:   7,
			IsActive:    true,
		},
		{
			Name:        "Vajina & Mastürbatörler",
			Slug:        "vajina-masturbatorler",
			Description: "Vajina ve mastürbatör ürünleri",
			Icon:        "🌸",
			SortOrder:   8,
			IsActive:    true,
		},
		{
			Name:        "Vibratörler",
			Slug:        "vibratorler",
			Description: "Titreşimli ürünler",
			Icon:        "🔊",
			SortOrder:   9,
			IsActive:    true,
		},
	}

	// Seed categories
	for _, category := range categories {
		var existingCategory Category
		result := db.Where("slug = ?", category.Slug).First(&existingCategory)
		if result.Error != nil {
			// Category doesn't exist, create it
			result = db.Create(&category)
			if result.Error != nil {
				log.Printf("Error creating category %s: %v", category.Name, result.Error)
			} else {
				log.Printf("Created category: %s", category.Name)
			}
		}
	}

	// Products
	products := []Product{
		{
			Name:          "Gıdıklayıcı Tüy",
			Slug:          "gidiklayici-tuy",
			Description:   "Gıdıklayıcı Tüy 25 cm boyundadır, kuş tüyü ve ABS plastikten üretilmiştir. Kırmızı, siyah, beyaz ve fuşya renkleri mevcuttur.",
			ShortDesc:     "25 cm uzunluk, kuş tüyü malzeme",
			Price:         246.24,
			OriginalPrice: 259.20,
			Discount:      5,
			SKU:           "N1005",
			Brand:         "NOXXX",
			Stock:         15,
			Rating:        4.2,
			ReviewCount:   45,
			IsActive:      true,
			CategoryID:    9, // Fetiş ve Fantezi
		},
		{
			Name:          "NOXXX 150 cm Kırbaç",
			Slug:          "noxxx-150-cm-kirbac",
			Description:   "Profesyonel kalite deri kırbaç",
			ShortDesc:     "150 cm uzunluk, deri malzeme",
			Price:         984.96,
			OriginalPrice: 1036.80,
			Discount:      5,
			SKU:           "N1006",
			Brand:         "NOXXX",
			Stock:         8,
			Rating:        4.3,
			ReviewCount:   67,
			IsActive:      true,
			CategoryID:    9, // Fetiş ve Fantezi
		},
		{
			Name:          "QUAKE App Controlled",
			Slug:          "quake-app-controlled",
			Description:   "Akıllı telefon ile kontrol edilebilen vibratör",
			ShortDesc:     "App kontrolü, uzaktan kumanda",
			Price:         16867.44,
			OriginalPrice: 17755.20,
			Discount:      5,
			SKU:           "Q1001",
			Brand:         "QUAKE",
			Stock:         3,
			Rating:        4.7,
			ReviewCount:   123,
			IsActive:      true,
			CategoryID:    9, // Vibratörler
		},
		{
			Name:          "Delikli Ağız Topu",
			Slug:          "delikli-agiz-topu",
			Description:   "Silikon ağız topu, nefes alabilir",
			ShortDesc:     "Silikon malzeme, nefes deliği",
			Price:         369.36,
			OriginalPrice: 388.80,
			Discount:      5,
			SKU:           "N1007",
			Brand:         "NOXXX",
			Stock:         12,
			Rating:        4.1,
			ReviewCount:   89,
			IsActive:      true,
			CategoryID:    9, // Fetiş ve Fantezi
		},
		{
			Name:          "NOXXX Delikli Silikon Ağız Topu Siyah",
			Slug:          "noxxx-delikli-silikon-agiz-topu-siyah",
			Description:   "Siyah silikon ağız topu, premium kalite",
			ShortDesc:     "Siyah silikon, premium kalite",
			Price:         738.72,
			OriginalPrice: 777.60,
			Discount:      5,
			SKU:           "N1008",
			Brand:         "NOXXX",
			Stock:         6,
			Rating:        4.4,
			ReviewCount:   156,
			IsActive:      true,
			CategoryID:    9, // Fetiş ve Fantezi
		},
		{
			Name:          "Hemşire Fantezi Kostüm Kırmızı Beyaz",
			Slug:          "hemsire-fantezi-kostum-kirmizi-beyaz",
			Description:   "Hemşire fantezi kostümü, kırmızı beyaz",
			ShortDesc:     "Fantezi kostüm, kırmızı beyaz",
			Price:         825.00,
			OriginalPrice: 825.00,
			Discount:      0,
			SKU:           "F1001",
			Brand:         "FANTASY",
			Stock:         10,
			Rating:        4.6,
			ReviewCount:   234,
			IsActive:      true,
			CategoryID:    9, // Fetiş ve Fantezi
		},
		{
			Name:          "Aurora Boreale Ginseng Aromalı Masaj Yağı",
			Slug:          "aurora-boreale-ginseng-aromali-masaj-yagi",
			Description:   "Ginseng aromalı masaj yağı, 150ml",
			ShortDesc:     "Ginseng aromalı, 150ml",
			Price:         273.60,
			OriginalPrice: 288.00,
			Discount:      5,
			SKU:           "A1001",
			Brand:         "AURORA",
			Stock:         25,
			Rating:        4.5,
			ReviewCount:   128,
			IsActive:      true,
			CategoryID:    5, // Cinsel Eczane
		},
		{
			Name:          "LoveToy Silicone Anal Plug S 11.5 cm Siyah",
			Slug:          "lovetoy-silicone-anal-plug-s-11-5-cm-siyah",
			Description:   "Siyah silikon anal plug, 11.5 cm",
			ShortDesc:     "Silikon anal plug, 11.5 cm",
			Price:         911.09,
			OriginalPrice: 959.04,
			Discount:      5,
			SKU:           "L1001",
			Brand:         "LOVETOY",
			Stock:         7,
			Rating:        4.3,
			ReviewCount:   89,
			IsActive:      true,
			CategoryID:    7, // Anal Ürünler
		},
		{
			Name:          "Anal Plug Titreşimli",
			Slug:          "anal-plug-titresimli",
			Description:   "Titreşimli anal plug, uzaktan kumandalı",
			ShortDesc:     "Titreşimli, uzaktan kumanda",
			Price:         4883.76,
			OriginalPrice: 5140.80,
			Discount:      5,
			SKU:           "A1002",
			Brand:         "ANAL",
			Stock:         4,
			Rating:        4.7,
			ReviewCount:   156,
			IsActive:      true,
			CategoryID:    7, // Anal Ürünler
		},
		{
			Name:          "Klitoris ve Dil Hareketli Şarjlı Domuzcuk Vibratör",
			Slug:          "klitoris-ve-dil-hareketli-sarjli-domuzcuk-vibrator",
			Description:   "Çift uçlu vibratör, şarjlı",
			ShortDesc:     "Çift uçlu, şarjlı",
			Price:         1009.58,
			OriginalPrice: 1062.72,
			Discount:      5,
			SKU:           "V1001",
			Brand:         "VIBE",
			Stock:         9,
			Rating:        4.6,
			ReviewCount:   203,
			IsActive:      true,
			CategoryID:    9, // Vibratörler
		},
		{
			Name:          "Callan Torso Saçlı Vücut Mastürbatör 19.5 kg",
			Slug:          "callan-torso-sacli-vucut-masturbator-19-5-kg",
			Description:   "Gerçekçi torso mastürbatör, 19.5 kg",
			ShortDesc:     "Gerçekçi torso, 19.5 kg",
			Price:         32011.20,
			OriginalPrice: 33696.00,
			Discount:      5,
			SKU:           "C1001",
			Brand:         "CALLAN",
			Stock:         2,
			Rating:        4.8,
			ReviewCount:   67,
			IsActive:      true,
			CategoryID:    8, // Vajina & Mastürbatörler
		},
	}

	// Seed products
	for _, product := range products {
		var existingProduct Product
		result := db.Where("slug = ?", product.Slug).First(&existingProduct)
		if result.Error != nil {
			// Product doesn't exist, create it
			result = db.Create(&product)
			if result.Error != nil {
				log.Printf("Error creating product %s: %v", product.Name, result.Error)
			} else {
				log.Printf("Created product: %s", product.Name)
			}
		}
	}

	log.Println("Database seeding completed!")
}
