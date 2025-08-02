import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import FeaturedProducts from '@/components/FeaturedProducts';
import PromoBanner from '@/components/PromoBanner';

export default function Home() {
  return (
    <div className="min-h-screen">
      <PromoBanner />
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
    </div>
  );
} 