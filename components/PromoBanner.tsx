'use client';

import { useState, useEffect } from 'react';
import { Truck, Shield, CreditCard } from 'lucide-react';

const PromoBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const promos = [
    {
      icon: <Truck className="h-5 w-5" />,
      text: '16:00 ARASI VERİLEN SİPARİŞLER AYNI GÜN KARGO!',
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      text: 'KAPIDA NAKİT & ÖDEME',
    },
    {
      icon: <Shield className="h-5 w-5" />,
      text: 'GİZLİ KARGO PAKETLEME',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [promos.length]);

  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-4">
          {promos.map((promo, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 transition-all duration-500 ${
                index === currentSlide
                  ? 'opacity-100 transform translate-x-0'
                  : 'opacity-0 transform translate-x-4'
              }`}
            >
              {promo.icon}
              <span className="text-sm font-medium">{promo.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromoBanner; 