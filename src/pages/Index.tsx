import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ComparisonSection from '@/components/ComparisonSection';

import AboutSection from '@/components/AboutSection';

import ClientsSection from '@/components/ClientsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ComparisonSection />
      <TestimonialsSection />
      <AboutSection />
      <ClientsSection />
      <LeadFormSection />
      <Footer />
    </div>
  );
};

export default Index;
