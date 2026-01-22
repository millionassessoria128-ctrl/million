import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ComparisonSection from '@/components/ComparisonSection';
import AboutSection from '@/components/AboutSection';
import LeadFormSection from '@/components/LeadFormSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ComparisonSection />
      <AboutSection />
      <LeadFormSection />
      <Footer />
    </div>
  );
};

export default Index;
