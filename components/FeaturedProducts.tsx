'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Heart, ShoppingCart } from 'lucide-react';

const FeaturedProducts = () => {
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());

  const products = [
    {
      id: '1',
      name: 'Aurora Boreale Ginseng Aromalı Masaj Yağı',
      price: 273.60,
      originalPrice: 288.00,
      image: '/images/products/massage-oil.jpg',
      rating: 4.5,
      reviews: 128,
      discount: 5,
    },
    {
      id: '2',
      name: 'LoveToy Silicone Anal Plug S 11.5 cm Siyah',
      price: 911.09,
      originalPrice: 959.04,
      image: '/images/products/anal-plug.jpg',
      rating: 4.3,
      reviews: 89,
      discount: 5,
    },
    {
      id: '3',
      name: 'Anal Plug Titreşimli',
      price: 4883.76,
      originalPrice: 5140.80,
      image: '/images/products/vibrating-plug.jpg',
      rating: 4.7,
      reviews: 156,
      discount: 5,
    },
    {
      id: '4',
      name: 'Klitoris ve Dil Hareketli Şarjlı Domuzcuk Vibratör',
      price: 1009.58,
      originalPrice: 1062.72,
      image: '/images/products/rabbit-vibrator.jpg',
      rating: 4.6,
      reviews: 203,
      discount: 5,
    },
    {
      id: '5',
      name: 'Callan Torso Saçlı Vücut Mastürbatör 19.5 kg',
      price: 32011.20,
      originalPrice: 33696.00,
      image: '/images/products/torso.jpg',
      rating: 4.8,
      reviews: 67,
      discount: 5,
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

  return (
    <section className="py-16 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
            Çok Satanlar
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            En popüler ve çok tercih edilen ürünlerimiz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card overflow-hidden group"
            >
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
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

              <div className="p-4 space-y-3">
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
                </div>

                <button className="w-full btn-primary flex items-center justify-center space-x-2">
                  <ShoppingCart className="h-4 w-4" />
                  <span>Sepete Ekle</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/urunler"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Tüm Ürünleri Gör</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 