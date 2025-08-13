import Feature from '@/components/sections/Feature';
import FeaturedProjectSection from '@/components/sections/FeaturedProjectsSection';
import FlyFrameworkSection from '@/components/sections/FlyFrameworkSection';
import HeroSection from '@/components/sections/HeroSection';
import LeadershipSection from '@/components/sections/LeaershipSection';
import NewsSection from '@/components/sections/NewsSection';
import TechnologyStackSection from '@/components/sections/TechnologyStackSection';

export default function Page() {

  return (
    <>
      <HeroSection />
      <Feature />
      <FeaturedProjectSection />
      <TechnologyStackSection />
      <FlyFrameworkSection />
      <LeadershipSection />
      <NewsSection />
    </>
  );
}
