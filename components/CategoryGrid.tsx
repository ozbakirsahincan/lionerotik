'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const CategoryGrid = () => {
  const categories = [
    {
      name: 'Penis Dildo',
      href: '/kategori/dildolar',
      image: '/images/categories/dildo.jpg',
      icon: '🔴',
      description: 'Gerçekçi dildolar',
    },
    {
      name: 'Vibrator',
      href: '/kategori/vibratorler',
      image: '/images/categories/vibrator.jpg',
      icon: '🔊',
      description: 'Titreşimli ürünler',
    },
    {
      name: 'Anal Oyuncak',
      href: '/kategori/anal-urunler',
      image: '/images/categories/anal.jpg',
      icon: '🔸',
      description: 'Anal oyuncaklar',
    },
    {
      name: 'Belden Bağlama',
      href: '/kategori/belden-baglama',
      image: '/images/categories/harness.jpg',
      icon: '🦴',
      description: 'Harness ürünleri',
    },
    {
      name: 'Penis Ürünleri',
      href: '/kategori/penis-urunleri',
      image: '/images/categories/penis.jpg',
      icon: '🔵',
      description: 'Penis oyuncakları',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-4">
            Popüler Kategoriler
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            En çok tercih edilen ürün kategorilerimizi keşfedin
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Link href={category.href} className="block group">
                <div className="card p-6 text-center space-y-4">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-200">
                      <span className="text-3xl">{category.icon}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors duration-200">
                      {category.name}
                    </h3>
                    <p className="text-sm text-secondary-600">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
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
            href="/kategoriler"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Tüm Kategorileri Gör</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryGrid; 