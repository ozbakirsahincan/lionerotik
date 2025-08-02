'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Heart, ShoppingCart, Grid, List, ChevronDown } from 'lucide-react';

interface CategoryProductsProps {
  categorySlug: string;
}

const CategoryProducts = ({ categorySlug }: CategoryProductsProps) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('price-low');
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());

  // Mock products data - gerçek uygulamada API'den gelecek
  const products = [
    {
      id: '1',
      name: 'Gıdıklayıcı Tüy',
      price: 246.24,
      originalPrice: 259.20,
      image: '/images/products/tickler.jpg',
      rating: 4.2,
      reviews: 45,
      discount: 5,
      brand: 'NOXXX',
    },
    {
      id: '2',
      name: 'NOXXX Bondage Bant Kırmızı',
      price: 984.96,
      originalPrice: 1036.80,
      image: '/images/products/bondage-tape.jpg',
      rating: 4.5,
      reviews: 78,
      discount: 5,
      brand: 'NOXXX',
    },
    {
      id: '3',
      name: 'Bunny Deri Maske',
      price: 369.36,
      originalPrice: 388.80,
      image: '/images/products/leather-mask.jpg',
      rating: 4.3,
      reviews: 32,
      discount: 5,
      brand: 'NOXXX',
    },
    {
      id: '4',
      name: 'Delikli Ağız Topu',
      price: 738.72,
      originalPrice: 777.60,
      image: '/images/products/gag-ball.jpg',
      rating: 4.1,
      reviews: 56,
      discount: 5,
      brand: 'NOXXX',
    },
    {
      id: '5',
      name: 'Göğüs Klipsi Zilli',
      price: 492.48,
      originalPrice: 518.40,
      image: '/images/products/nipple-clamps.jpg',
      rating: 4.4,
      reviews: 89,
      discount: 5,
      brand: 'NOXXX',
    },
    {
      id: '6',
      name: 'NOXXX Esaret İpi Kırmızı',
      price: 615.60,
      originalPrice: 648.00,
      image: '/images/products/bondage-rope.jpg',
      rating: 4.6,
      reviews: 67,
      discount: 5,
      brand: 'NOXXX',
    },
  ];

  const toggleWishlist = (productId: string) => {
    const newWishlist = new Set(wishlist);
    if (newWishlist.has(productId)) {
      newWishlist.delete(productId);
    } else {
      newWishlist.add(productId);
    }
    setWishlist(newWishlist);
  };

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="space-y-6">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'bg-secondary-100 text-secondary-600'
              }`}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'bg-secondary-100 text-secondary-600'
              }`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
          
          <Link href="/karsilastir" className="text-sm text-primary-600 hover:text-primary-700">
            Ürün Karşılaştır
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-secondary-600">Sırala:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1 border border-secondary-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="price-low">Ucuzdan &gt; Pahalıya</option>
              <option value="price-high">Pahalıdan &gt; Ucuza</option>
              <option value="rating">Puana Göre</option>
              <option value="name">İsme Göre</option>
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-secondary-600">Göster:</span>
            <select className="px-3 py-1 border border-secondary-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="48">48</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
          : 'grid-cols-1'
      }`}>
        {sortedProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className={`card overflow-hidden group ${
              viewMode === 'list' ? 'flex' : ''
            }`}
          >
            <div className={`relative ${viewMode === 'list' ? 'w-48' : ''}`}>
              <div className={`bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center ${
                viewMode === 'list' ? 'h-48' : 'aspect-square'
              }`}>
                <span className="text-4xl">🛍️</span>
              </div>
              
              {/* Discount Badge */}
              {product.discount > 0 && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  -{product.discount}%
                </div>
              )}
              
              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className="absolute top-2 left-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <Heart 
                  className={`h-4 w-4 ${
                    wishlist.has(product.id) ? 'text-red-500 fill-current' : 'text-secondary-400'
                  }`} 
                />
              </button>
            </div>

            <div className={`p-4 space-y-3 ${viewMode === 'list' ? 'flex-1' : ''}`}>
              <div className="space-y-2">
                <h3 className="font-medium text-secondary-900 line-clamp-2 group-hover:text-primary-600 transition-colors duration-200">
                  {product.name}
                </h3>
                
                <div className="flex items-center space-x-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-secondary-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-secondary-500">
                    ({product.reviews})
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-primary-600">
                    {product.price.toLocaleString('tr-TR')} ₺
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-secondary-500 line-through">
                      {product.originalPrice.toLocaleString('tr-TR')} ₺
                    </span>
                  )}
                </div>
                
                <div className="text-sm text-secondary-600">
                  Marka: {product.brand}
                </div>
              </div>

              <button className="w-full btn-primary flex items-center justify-center space-x-2">
                <ShoppingCart className="h-4 w-4" />
                <span>Sepete Ekle</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <nav className="flex items-center space-x-2">
          <button className="px-3 py-2 text-sm text-secondary-600 hover:text-primary-600 disabled:opacity-50">
            Önceki
          </button>
          <button className="px-3 py-2 text-sm bg-primary-600 text-white rounded-lg">1</button>
          <button className="px-3 py-2 text-sm text-secondary-600 hover:text-primary-600">2</button>
          <button className="px-3 py-2 text-sm text-secondary-600 hover:text-primary-600">3</button>
          <button className="px-3 py-2 text-sm text-secondary-600 hover:text-primary-600">
            Sonraki
          </button>
        </nav>
      </div>
    </div>
  );
};

export default CategoryProducts; 