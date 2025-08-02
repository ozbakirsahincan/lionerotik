'use client';

import { motion } from 'framer-motion';
import { Star, Heart, ShoppingCart } from 'lucide-react';

interface RelatedProductsProps {
  productSlug: string;
}

const RelatedProducts = ({ productSlug }: RelatedProductsProps) => {
  // Mock related products data - gerçek uygulamada API'den gelecek
  const relatedProducts = [
    {
      id: '1',
      name: 'NOXXX 150 cm Kırbaç',
      price: 984.96,
      originalPrice: 1036.80,
      image: '/images/products/whip.jpg',
      rating: 4.3,
      reviews: 67,
      discount: 5,
    },
    {
      id: '2',
      name: 'QUAKE App Controlled',
      price: 16867.44,
      originalPrice: 17755.20,
      image: '/images/products/app-vibrator.jpg',
      rating: 4.7,
      reviews: 123,
      discount: 5,
    },
    {
      id: '3',
      name: 'Delikli Ağız Topu',
      price: 369.36,
      originalPrice: 388.80,
      image: '/images/products/gag-ball.jpg',
      rating: 4.1,
      reviews: 89,
      discount: 5,
    },
    {
      id: '4',
      name: 'NOXXX Delikli Silikon Ağız Topu Siyah',
      price: 738.72,
      originalPrice: 777.60,
      image: '/images/products/silicone-gag.jpg',
      rating: 4.4,
      reviews: 156,
      discount: 5,
    },
    {
      id: '5',
      name: 'Hemşire Fantezi Kostüm Kırmızı Beyaz',
      price: 825.00,
      originalPrice: 825.00,
      image: '/images/products/nurse-costume.jpg',
      rating: 4.6,
      reviews: 234,
      discount: 0,
      isNew: true,
    },
  ];

  return (
    <section className="mt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-secondary-900 mb-2">
          Benzer Ürünler
        </h2>
        <p className="text-secondary-600">
          Bu ürünle birlikte alınan diğer ürünler
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {relatedProducts.map((product, index) => (
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
              
              {/* New Badge */}
              {product.isNew && (
                <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                  YENİ
                </div>
              )}
              
              {/* Wishlist Button */}
              <button className="absolute top-2 left-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Heart className="h-4 w-4 text-secondary-400" />
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

      {/* Second Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-12"
      >
        <h2 className="text-2xl font-bold text-secondary-900 mb-2">
          Bu Ürünü Alanlar Bunları da Aldı
        </h2>
        <p className="text-secondary-600 mb-6">
          Müşterilerimizin birlikte aldığı ürünler
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {relatedProducts.slice(0, 5).map((product, index) => (
            <motion.div
              key={`related-${product.id}`}
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
                <button className="absolute top-2 left-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Heart className="h-4 w-4 text-secondary-400" />
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
      </motion.div>
    </section>
  );
};

export default RelatedProducts; 