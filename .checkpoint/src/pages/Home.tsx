import React, { useEffect } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CompanyIntro } from '../components/home/CompanyIntro';
import { ServiceDivisions } from '../components/home/ServiceDivisions';
import { ServiceNetworkMap } from '../components/home/ServiceNetworkMap';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { HowItWorks } from '../components/home/HowItWorks';
import { FinalCTA } from '../components/home/FinalCTA';

interface HomeProps {
  onRequestQuote: (division?: 'xpress' | 'xfers' | 'xtras') => void;
}

export const Home: React.FC<HomeProps> = ({ onRequestQuote }) => {
  useEffect(() => {
    document.title = 'Gulf Northern X | United States Transportation & Commercial Vehicle Network';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection onRequestQuote={() => onRequestQuote()} />
      <CompanyIntro />
      <ServiceDivisions onRequestQuote={onRequestQuote} />
      <ServiceNetworkMap onRequestQuote={() => onRequestQuote()} />
      <WhyChooseUs />
      <HowItWorks onRequestQuote={() => onRequestQuote()} />
      <FinalCTA onRequestQuote={() => onRequestQuote()} />
    </main>
  );
};

