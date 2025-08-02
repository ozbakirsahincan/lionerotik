'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Contact */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-pink-400 bg-clip-text text-transparent">
                LION EROTIK
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-400" />
                <span className="text-sm">Adres: ANTALYA / Türkiye</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <span className="text-sm">Telefon: 05451450205</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <span className="text-sm">Mail: info@lionerotik.com</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-secondary-800 rounded-full hover:bg-primary-600 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-secondary-800 rounded-full hover:bg-primary-600 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-secondary-800 rounded-full hover:bg-primary-600 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Kurumsal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">KURUMSAL</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hakkimizda" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/gizlilik-politikasi" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/mesafeli-satis-sozlesmesi" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Mesafeli Satış Sözleşmesi
                </Link>
              </li>
              <li>
                <Link href="/iptal-ve-iade-kosullari" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  İptal ve İade Koşulları
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Hesabım */}
          <div>
            <h3 className="text-lg font-semibold mb-4">HESABIM</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hesabim" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Hesabım
                </Link>
              </li>
              <li>
                <Link href="/siparislerim" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Siparişlerim
                </Link>
              </li>
              <li>
                <Link href="/favori-listem" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Favori Listem
                </Link>
              </li>
              <li>
                <Link href="/urun-iade-formu" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Ürün İade Formu
                </Link>
              </li>
              <li>
                <Link href="/destek-merkezi" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Destek Merkezi
                </Link>
              </li>
            </ul>
          </div>

          {/* Kategoriler */}
          <div>
            <h3 className="text-lg font-semibold mb-4">KATEGORİLER</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/kategori/vibratorler" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Vibratörler
                </Link>
              </li>
              <li>
                <Link href="/kategori/anal-urunler" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Anal Oyuncak
                </Link>
              </li>
              <li>
                <Link href="/kategori/masturbatorler" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Mastürbatör
                </Link>
              </li>
              <li>
                <Link href="/kategori/dildolar" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Dildo
                </Link>
              </li>
              <li>
                <Link href="/kategori/penis-urunleri" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Penis Ürünleri
                </Link>
              </li>
              <li>
                <Link href="/kategori/fantezi-giyim" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Fantezi Giyim
                </Link>
              </li>
              <li>
                <Link href="/kategori/cinsel-saglik" className="text-secondary-300 hover:text-white transition-colors duration-200">
                  Cinsel Sağlık
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-800 mt-8 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="text-sm text-secondary-400">Ödeme Yöntemleri:</span>
              <div className="flex space-x-2">
                <span className="text-xs bg-secondary-800 px-2 py-1 rounded">axess</span>
                <span className="text-xs bg-secondary-800 px-2 py-1 rounded">+bonus</span>
                <span className="text-xs bg-secondary-800 px-2 py-1 rounded">WORLD</span>
                <span className="text-xs bg-secondary-800 px-2 py-1 rounded">maximum</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-sm text-secondary-400">RapidSSL Security</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-sm text-secondary-400">
              © {currentYear} Lion Erotik. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 