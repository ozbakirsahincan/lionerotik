# Lion Erotik - Modern E-ticaret Uygulaması

Bu proje, modern ve kullanıcı dostu bir e-ticaret web sitesi uygulamasıdır. Next.js frontend ve Go Fiber backend kullanılarak geliştirilmiştir.

## 🚀 Özellikler

### Frontend (Next.js)
- **Modern Tasarım**: Tailwind CSS ile responsive ve modern tasarım
- **SEO Optimizasyonu**: Next.js'in built-in SEO özellikleri
- **Hızlı Performans**: Server-side rendering ve optimizasyonlar
- **Kullanıcı Dostu**: Kolay navigasyon ve arama
- **Animasyonlar**: Framer Motion ile smooth animasyonlar
- **Responsive**: Mobil ve desktop uyumlu

### Backend (Go Fiber)
- **Hızlı API**: Go Fiber ile yüksek performanslı API
- **Güvenli**: JWT authentication ve password hashing
- **Veritabanı**: PostgreSQL ve GORM ORM
- **RESTful API**: Standart REST API endpoints
- **CORS Desteği**: Cross-origin resource sharing

## 🛠️ Teknolojiler

### Frontend
- **Next.js 14**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **Axios**: HTTP client

### Backend
- **Go Fiber**: Web framework
- **GORM**: ORM for Go
- **PostgreSQL**: Database
- **JWT**: Authentication
- **bcrypt**: Password hashing

## 📦 Kurulum

### Gereksinimler
- Node.js 18+
- Go 1.21+
- PostgreSQL 12+

### Frontend Kurulumu

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build
npm start
```

### Backend Kurulumu

```bash
# Backend dizinine git
cd backend

# Go modüllerini yükle
go mod tidy

# Environment dosyasını oluştur
cp .env.example .env

# Veritabanını ayarla
# PostgreSQL'de 'lionerotik' veritabanını oluştur

# Uygulamayı çalıştır
go run .
```

### Veritabanı Kurulumu

```sql
-- PostgreSQL'de veritabanı oluştur
CREATE DATABASE lionerotik;

-- Kullanıcı oluştur (isteğe bağlı)
CREATE USER lionerotik_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE lionerotik TO lionerotik_user;
```

## 🔧 Konfigürasyon

### Environment Variables

Frontend (`.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:8080/api
```

Backend (`.env`):
```env
DATABASE_URL=host=localhost user=postgres password=password dbname=lionerotik port=5432 sslmode=disable
JWT_SECRET=your-secret-key-here
PORT=8080
```

## 📁 Proje Yapısı

```
lionerotik/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── kategori/          # Category pages
│   └── urun/              # Product pages
├── components/             # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Hero section
│   ├── CategoryGrid.tsx   # Category display
│   ├── FeaturedProducts.tsx # Featured products
│   ├── CategoryFilter.tsx # Product filters
│   ├── CategoryProducts.tsx # Product listing
│   ├── ProductDetail.tsx  # Product detail page
│   └── RelatedProducts.tsx # Related products
├── backend/               # Go backend
│   ├── main.go           # Main application
│   ├── models.go         # Database models
│   ├── handlers.go       # API handlers
│   └── auth.go           # Authentication
├── public/               # Static assets
├── package.json          # Frontend dependencies
├── go.mod               # Backend dependencies
└── README.md            # This file
```

## 🚀 API Endpoints

### Kategoriler
- `GET /api/categories` - Tüm kategorileri getir
- `GET /api/categories/:id` - Kategori detayı
- `GET /api/categories/:id/products` - Kategori ürünleri

### Ürünler
- `GET /api/products` - Tüm ürünler
- `GET /api/products/:id` - Ürün detayı
- `GET /api/products/search?q=query` - Ürün arama
- `GET /api/products/featured` - Öne çıkan ürünler

### Kullanıcılar
- `POST /api/auth/register` - Kullanıcı kaydı
- `POST /api/auth/login` - Kullanıcı girişi
- `GET /api/auth/profile` - Profil bilgileri
- `PUT /api/auth/profile` - Profil güncelleme

### Siparişler
- `POST /api/orders` - Sipariş oluştur
- `GET /api/orders` - Kullanıcı siparişleri
- `GET /api/orders/:id` - Sipariş detayı

### Sepet
- `GET /api/cart` - Sepet içeriği
- `POST /api/cart/add` - Sepete ürün ekle
- `PUT /api/cart/update` - Sepet güncelle
- `DELETE /api/cart/remove/:id` - Sepetten ürün çıkar

### Favoriler
- `GET /api/wishlist` - Favori listesi
- `POST /api/wishlist/add` - Favorilere ekle
- `DELETE /api/wishlist/remove/:id` - Favorilerden çıkar

## 🎨 Tasarım Özellikleri

### Renk Paleti
- **Primary**: Purple gradient (#d946ef to #a21caf)
- **Secondary**: Gray scale (#64748b to #0f172a)
- **Accent**: Red for discounts (#ef4444)

### Tipografi
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Animasyonlar
- **Fade In**: Sayfa yüklenirken
- **Slide Up**: Elementler görünürken
- **Hover Effects**: Kartlar ve butonlar için

## 📱 Responsive Tasarım

- **Mobile First**: 320px ve üzeri
- **Tablet**: 768px ve üzeri
- **Desktop**: 1024px ve üzeri
- **Large Desktop**: 1280px ve üzeri

## 🔍 SEO Optimizasyonu

- **Meta Tags**: Her sayfa için özel meta etiketleri
- **Structured Data**: JSON-LD markup
- **Sitemap**: Otomatik sitemap oluşturma
- **Robots.txt**: Search engine yönergeleri
- **Open Graph**: Social media paylaşımları

## 🚀 Deployment

### Frontend (Vercel)
```bash
npm run build
# Vercel'e deploy et
```

### Backend (Docker)
```dockerfile
FROM golang:1.21-alpine
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build -o main .
EXPOSE 8080
CMD ["./main"]
```

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

- **Website**: https://lionerotik.com
- **Email**: info@lionerotik.com
- **Phone**: 05451450205
- **Address**: ANTALYA / Türkiye 