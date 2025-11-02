import AboutUsSection from "@/components/sections/AboutUsSection";
import HistorySection from "@/components/sections/HistorySection";
import IntroductionSection from "@/components/sections/IntroductionSection";
import LogoSection from "@/components/sections/LogoSection";

export default function Page() {
  
  return (
    <>
        <div><AboutUsSection /></div>
        <div><IntroductionSection /></div>
        <div><HistorySection /></div>
        <div><LogoSection /></div>
    </>
  );
}
