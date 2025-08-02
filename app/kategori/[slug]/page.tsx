import { Metadata } from 'next';
import CategoryProducts from '@/components/CategoryProducts';
import CategoryFilter from '@/components/CategoryFilter';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categoryName = getCategoryName(params.slug);
  
  return {
    title: `${categoryName} - Lion Erotik`,
    description: `${categoryName} kategorisindeki premium erotik ürünler. Aynı gün kargo, gizli paketleme ve kapıda ödeme seçenekleri.`,
    keywords: `${categoryName.toLowerCase()}, erotik ürünler, antalya, lionerotik`,
  };
}

function getCategoryName(slug: string): string {
  const categoryMap: { [key: string]: string } = {
    'dildolar': 'Dildolar',
    'seks-makinalari': 'Seks Makinaları',
    'belden-baglama': 'Belden Bağlama',
    'penis-urunleri': 'Penis Ürünleri',
    'cinsel-eczane': 'Cinsel Eczane',
    'fetis-ve-fantezi': 'Fetiş ve Fantezi',
    'anal-urunler': 'Anal Ürünler',
    'vajina-masturbatorler': 'Vajina & Mastürbatörler',
    'vibratorler': 'Vibratörler',
  };
  
  return categoryMap[slug] || 'Ürünler';
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = getCategoryName(params.slug);
  
  return (
    <div className="min-h-screen bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-secondary-600 mb-6">
          <a href="/" className="hover:text-primary-600">Ana Sayfa</a>
          <span>/</span>
          <span className="text-secondary-900">{categoryName}</span>
        </nav>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-2">
            {categoryName}
          </h1>
          <p className="text-lg text-secondary-600">
            {categoryName} kategorisindeki premium ürünlerimizi keşfedin
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <CategoryFilter />
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <CategoryProducts categorySlug={params.slug} />
          </div>
        </div>
      </div>
    </div>
  );
} 