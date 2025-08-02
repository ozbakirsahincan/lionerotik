'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, Heart, User, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'Dildolar', href: '/kategori/dildolar', icon: '🔴' },
    { name: 'Seks Makinaları', href: '/kategori/seks-makinalari', icon: '⚙️' },
    { name: 'Belden Bağlama', href: '/kategori/belden-baglama', icon: '🦴' },
    { name: 'Penis Ürünleri', href: '/kategori/penis-urunleri', icon: '🔵' },
    { name: 'Cinsel Eczane', href: '/kategori/cinsel-eczane', icon: '💊' },
    { name: 'Fetiş ve Fantezi', href: '/kategori/fetis-ve-fantezi', icon: '🎭' },
    { name: 'Anal Ürünler', href: '/kategori/anal-urunler', icon: '🔸' },
    { name: 'Vajina & Mastürbatörler', href: '/kategori/vajina-masturbatorler', icon: '🌸' },
    { name: 'Vibratörler', href: '/kategori/vibratorler', icon: '🔊' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-primary-600 text-white py-2 px-4 text-center text-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <span>16:00 ARASI VERİLEN SİPARİŞLER AYNI GÜN KARGO!</span>
          <span>KAPIDA NAKİT & ÖDEME</span>
          <span>GİZLİ KARGO PAKETLEME</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary-600">
            lionerotik
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="text-secondary-700 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Ürün ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-secondary-400" />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-secondary-100 rounded-lg transition-colors duration-200">
              <Heart className="h-6 w-6 text-secondary-600" />
            </button>
            <button className="p-2 hover:bg-secondary-100 rounded-lg transition-colors duration-200">
              <User className="h-6 w-6 text-secondary-600" />
            </button>
            <button className="p-2 hover:bg-secondary-100 rounded-lg transition-colors duration-200 relative">
              <ShoppingCart className="h-6 w-6 text-secondary-600" />
              <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-secondary-100 rounded-lg transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-secondary-600" />
              ) : (
                <Menu className="h-6 w-6 text-secondary-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Ürün ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-secondary-400" />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white border-t border-secondary-200 py-4">
            <nav className="space-y-2">
              {categories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="block px-4 py-2 text-secondary-700 hover:bg-secondary-100 hover:text-primary-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.icon} {category.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 