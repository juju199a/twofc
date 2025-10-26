import ConceptSection from '@/components/sections/ConceptSection';
import FeaturedProjectSection from '@/components/sections/FeaturedProjectsSection';
import FlyFrameworkSection from '@/components/sections/FlyFrameworkSection';
import HeroSection from '@/components/sections/HeroSection';
import LeadershipSection from '@/components/sections/LeadershipSection';
import NewsSection from '@/components/sections/NewsSection';
import TechnologyStackSection from '@/components/sections/TechnologyStackSection';


export default function Page() {
  
  return (
    <>
      <div><HeroSection /></div>
      <div><ConceptSection /></div>
      <div><FeaturedProjectSection /></div>
      <div><TechnologyStackSection /></div>
      <div><FlyFrameworkSection /></div>
      <div><LeadershipSection /></div>
      <div><NewsSection /></div>
      
      
    </>
  );
}
