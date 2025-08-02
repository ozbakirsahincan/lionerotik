'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CategoryFilter = () => {
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['price', 'brands']));

  const brands = [
    'LoveToy', 'NOXXX', 'Pipedream', 'S-Hande', 'Seven Creations',
    'Fleshlight', 'Tenga', 'We-Vibe', 'Lelo', 'Satisfyer'
  ];

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const handlePriceChange = (index: number, value: number) => {
    const newRange = [...priceRange];
    newRange[index] = value;
    setPriceRange(newRange);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-secondary-900">Filtre</h3>
        <button className="text-sm text-primary-600 hover:text-primary-700">
          Sıfırla
        </button>
      </div>

      {/* Price Range */}
      <div className="border-b border-secondary-200 pb-4">
        <button
          onClick={() => toggleSection('price')}
          className="flex items-center justify-between w-full text-left font-medium text-secondary-900 mb-3"
        >
          FİYAT ARALIĞI
          {expandedSections.has('price') ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
        
        {expandedSections.has('price') && (
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <label className="block text-sm text-secondary-600 mb-1">Min</label>
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(0, parseInt(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-secondary-300 rounded-lg text-sm"
                  placeholder="0"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm text-secondary-600 mb-1">Max</label>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(1, parseInt(e.target.value) || 0)}
                  className="w-full px-3 py-2 border border-secondary-300 rounded-lg text-sm"
                  placeholder="50000"
                />
              </div>
            </div>
            
            <div className="relative">
              <input
                type="range"
                min="0"
                max="50000"
                value={priceRange[0]}
                onChange={(e) => handlePriceChange(0, parseInt(e.target.value))}
                className="w-full h-2 bg-secondary-200 rounded-lg appearance-none cursor-pointer"
              />
              <input
                type="range"
                min="0"
                max="50000"
                value={priceRange[1]}
                onChange={(e) => handlePriceChange(1, parseInt(e.target.value))}
                className="w-full h-2 bg-secondary-200 rounded-lg appearance-none cursor-pointer absolute top-0"
              />
            </div>
            
            <div className="text-sm text-secondary-600">
              {priceRange[0].toLocaleString('tr-TR')} ₺ - {priceRange[1].toLocaleString('tr-TR')} ₺
            </div>
          </div>
        )}
      </div>

      {/* Brands */}
      <div className="border-b border-secondary-200 pb-4">
        <button
          onClick={() => toggleSection('brands')}
          className="flex items-center justify-between w-full text-left font-medium text-secondary-900 mb-3"
        >
          MARKALAR
          {expandedSections.has('brands') ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
        
        {expandedSections.has('brands') && (
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {brands.map((brand) => (
              <label key={brand} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm text-secondary-700">{brand}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Size */}
      <div className="border-b border-secondary-200 pb-4">
        <button
          onClick={() => toggleSection('size')}
          className="flex items-center justify-between w-full text-left font-medium text-secondary-900 mb-3"
        >
          BOYUT
          {expandedSections.has('size') ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
        
        {expandedSections.has('size') && (
          <div className="space-y-2">
            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
              <label key={size} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm text-secondary-700">{size}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Color */}
      <div>
        <button
          onClick={() => toggleSection('color')}
          className="flex items-center justify-between w-full text-left font-medium text-secondary-900 mb-3"
        >
          RENK
          {expandedSections.has('color') ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
        
        {expandedSections.has('color') && (
          <div className="grid grid-cols-3 gap-2">
            {['Kırmızı', 'Pembe', 'Siyah', 'Beyaz', 'Mor', 'Mavi'].map((color) => (
              <label key={color} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm text-secondary-700">{color}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter; 