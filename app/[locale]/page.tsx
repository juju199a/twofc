import CoreConcept from '@/components/sections/CoreConcept';
import FeaturedProjectSection from '@/components/sections/FeaturedProjectsSection';
import FlyFrameworkSection from '@/components/sections/FlyFrameworkSection';
import HeroSection from '@/components/sections/HeroSection';
import LeadershipSection from '@/components/sections/LeadershipSection';
import NewsSection from '@/components/sections/NewsSection';
import TechnologyStackSection from '@/components/sections/TechnologyStackSection';


export default function Page() {
  
  return (
    <>
      <div className="reveal"><HeroSection /></div>
      <div className="reveal"><CoreConcept /></div>
      <div className="reveal"><FeaturedProjectSection /></div>
      <div className="reveal"><TechnologyStackSection /></div>
      <div className="reveal"><FlyFrameworkSection /></div>
      <div className="reveal"><LeadershipSection /></div>
      <div className="reveal"><NewsSection /></div>
      
      
    </>
  );
}
