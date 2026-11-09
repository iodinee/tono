import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import BentoGrid from '@/components/sections/BentoGrid';
import UseCases from '@/components/sections/UseCases';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="bg-background min-h-screen pt-20">
      <Header />
      <Hero />
      <BentoGrid />
      <UseCases />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
