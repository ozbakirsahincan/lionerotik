import { Metadata } from 'next';
import ProductDetail from '@/components/ProductDetail';
import RelatedProducts from '@/components/RelatedProducts';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  // Burada gerçek ürün verilerini API'den çekebilirsiniz
  const productName = decodeURIComponent(params.slug.replace(/-/g, ' '));
  
  return {
    title: `${productName} - Lion Erotik`,
    description: `${productName} ürünü. Premium kalite, aynı gün kargo, gizli paketleme.`,
    keywords: `${productName.toLowerCase()}, erotik ürünler, antalya, lionerotik`,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <div className="min-h-screen bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-secondary-600 mb-6">
          <a href="/" className="hover:text-primary-600">Ana Sayfa</a>
          <span>/</span>
          <a href="/kategoriler" className="hover:text-primary-600">Kategoriler</a>
          <span>/</span>
          <span className="text-secondary-900">Ürün Detayı</span>
        </nav>

        {/* Product Detail */}
        <ProductDetail productSlug={params.slug} />

        {/* Related Products */}
        <RelatedProducts productSlug={params.slug} />
      </div>
    </div>
  );
} 