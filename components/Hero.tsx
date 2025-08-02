'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight">
                <span className="text-primary-600">lionerotik</span>
                <br />
                Premium Erotik Ürünler
              </h1>
              
              <div className="flex items-center space-x-6 text-secondary-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary-600" />
                  <span className="font-medium">ANTALYA İÇİ</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary-600" />
                  <span className="font-medium">JET KURYE</span>
                </div>
              </div>
              
              <p className="text-xl text-secondary-700 leading-relaxed">
                1 SAATTE İSTEDİĞİNİZ ADRESE TESLİM
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/urunler"
                className="btn-primary flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>HIZLI SİPARİŞ</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <Link
                href="/kategoriler"
                className="btn-secondary flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>KATEGORİLERİ KEŞFET</span>
              </Link>
            </div>

            <div className="text-sm text-secondary-500">
              www.lionerotik.com
            </div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Delivery Character */}
              <div className="relative w-full h-96 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 bg-primary-300 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-4xl">🚚</span>
                  </div>
                  <div className="space-y-2">
                    <div className="w-24 h-6 bg-primary-300 rounded-full mx-auto"></div>
                    <div className="w-32 h-4 bg-primary-300 rounded-full mx-auto"></div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <span className="text-xl">📦</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
    </section>
  );
};

export default Hero; 