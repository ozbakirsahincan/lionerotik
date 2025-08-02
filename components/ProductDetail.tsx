'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, ShoppingCart, Truck, Shield, CreditCard, Minus, Plus } from 'lucide-react';

interface ProductDetailProps {
  productSlug: string;
}

const ProductDetail = ({ productSlug }: ProductDetailProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Mock product data - gerçek uygulamada API'den gelecek
  const product = {
    id: '1',
    name: 'Gıdıklayıcı Tüy',
    description: 'Gıdıklayıcı Tüy 25 cm boyundadır, kuş tüyü ve ABS plastikten üretilmiştir. Kırmızı, siyah, beyaz ve fuşya renkleri mevcuttur.',
    price: 246.24,
    originalPrice: 259.20,
    discount: 5,
    brand: 'NOXXX',
    sku: 'N1005',
    stock: 15,
    rating: 4.2,
    reviewCount: 45,
    images: [
      '/images/products/tickler-1.jpg',
      '/images/products/tickler-2.jpg',
      '/images/products/tickler-3.jpg',
    ],
    features: [
      '25 cm uzunluk',
      'Kuş tüyü malzeme',
      'ABS plastik sap',
      'Çoklu renk seçeneği',
      'Kolay temizlik',
    ],
  };

  const handleQuantityChange = (type: 'increase' | 'decrease') => {
    if (type === 'increase') {
      setQuantity(prev => Math.min(prev + 1, product.stock));
    } else {
      setQuantity(prev => Math.max(prev - 1, 1));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center">
            <span className="text-6xl">🪶</span>
          </div>
          
          {/* Thumbnail Images */}
          <div className="flex space-x-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 rounded-lg border-2 transition-colors duration-200 ${
                  selectedImage === index
                    ? 'border-primary-500 bg-primary-100'
                    : 'border-secondary-200 bg-secondary-100'
                }`}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-2xl">🪶</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-secondary-900">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-secondary-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-secondary-600">
                {product.rating} ({product.reviewCount} değerlendirme)
              </span>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-primary-600">
                  {product.price.toLocaleString('tr-TR')} ₺
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-xl text-secondary-500 line-through">
                    {product.originalPrice.toLocaleString('tr-TR')} ₺
                  </span>
                )}
                {product.discount > 0 && (
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                    -{product.discount}%
                  </span>
                )}
              </div>
              <p className="text-sm text-secondary-600">
                KDV Hariç: {(product.price * 0.8).toLocaleString('tr-TR')} ₺
              </p>
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-secondary-600">
                Stok: {product.stock > 0 ? 'VAR' : 'YOK'}
              </span>
            </div>

            {/* Product Details */}
            <div className="space-y-2 text-sm text-secondary-600">
              <p><strong>Marka:</strong> {product.brand}</p>
              <p><strong>Ürün Kodu:</strong> {product.sku}</p>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-secondary-700">Adet</label>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => handleQuantityChange('decrease')}
                disabled={quantity <= 1}
                className="p-2 border border-secondary-300 rounded-lg hover:bg-secondary-100 disabled:opacity-50"
              >
                <Minus className="h-4 w-4" />
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
                max={product.stock}
                className="w-20 text-center border border-secondary-300 rounded-lg px-3 py-2"
              />
              <button
                onClick={() => handleQuantityChange('increase')}
                disabled={quantity >= product.stock}
                className="p-2 border border-secondary-300 rounded-lg hover:bg-secondary-100 disabled:opacity-50"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 btn-primary flex items-center justify-center space-x-2 py-4">
              <ShoppingCart className="h-5 w-5" />
              <span>SEPETE EKLE</span>
            </button>
            
            <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
              <span>HEMEN AL</span>
            </button>
            
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`p-4 rounded-lg border-2 transition-colors duration-200 ${
                isWishlisted
                  ? 'border-red-500 bg-red-50 text-red-600'
                  : 'border-secondary-300 hover:border-primary-500'
              }`}
            >
              <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
          </div>

          {/* Additional Actions */}
          <div className="flex flex-wrap gap-4 text-sm">
            <button className="text-primary-600 hover:text-primary-700 flex items-center space-x-1">
              <span>Alışveriş Listeme Ekle</span>
            </button>
            <button className="text-primary-600 hover:text-primary-700 flex items-center space-x-1">
              <span>Karşılaştırma listesine ekle</span>
            </button>
          </div>

          {/* Shipping Info */}
          <div className="bg-secondary-50 rounded-lg p-4 space-y-3">
            <div className="flex items-center space-x-2">
              <Truck className="h-5 w-5 text-primary-600" />
              <span className="text-sm">
                21 Saat 51 Dakika içinde sipariş verirseniz yarın kargo!
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-primary-600" />
              <span className="text-sm">Güvenli ödeme</span>
            </div>
            <div className="flex items-center space-x-2">
              <CreditCard className="h-5 w-5 text-primary-600" />
              <span className="text-sm">Kapıda ödeme seçeneği</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-8 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-secondary-900 mb-3">ÜRÜN BİLGİSİ</h3>
          <p className="text-secondary-700 leading-relaxed">{product.description}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-secondary-900 mb-3">ÖZELLİKLER</h3>
          <ul className="space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2 text-secondary-700">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-secondary-900 mb-3">İPTAL & İADE</h3>
          <p className="text-secondary-700">
            Ürün tesliminden itibaren 14 gün içinde iade edebilirsiniz. Ürün orijinal ambalajında ve kullanılmamış olmalıdır.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-secondary-900 mb-3">TAKSİTLER</h3>
          <p className="text-secondary-700">
            Tüm kredi kartlarına 3, 6, 9 ve 12 taksit seçenekleri mevcuttur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 