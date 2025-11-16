import KeyFeatureSection from "@/components/sections/KeyFeatureSection";
import OverviewSection from "@/components/sections/OverviewSection";
import ProjectIntroSection from "@/components/sections/ProjectIntroSection";
import SystemArchitectureSection from "@/components/sections/SystemArchitectureSection";

export default function Page() {
  
  return (
    <>
        <div><OverviewSection messageRoot='SolutionsPage.overviewSection' mediaUrl='https://www.youtube.com/embed/wOt3D5IGHj4' /></div>
        <div><ProjectIntroSection messageRoot='SolutionsPage.projectIntroSection_1' imageSrc='/images/service/flyoffice_00.png' /></div>
        <div><SystemArchitectureSection messageRoot='SolutionsPage.systemArchitectureSection_1' imageSrc='/images/service/flyoffice_02.png' /></div>
        <div><KeyFeatureSection messageRoot='SolutionsPage.keyFeatureSection_1' imageSrc='/images/service/flyoffice_03.png' /></div>

        <div><ProjectIntroSection messageRoot='SolutionsPage.projectIntroSection_2' imageSrc='/images/service/hotel_01.png' /></div>
        <div><SystemArchitectureSection messageRoot='SolutionsPage.systemArchitectureSection_2' imageSrc='/images/service/hotel_02.png'/></div>
        <div><KeyFeatureSection messageRoot='SolutionsPage.keyFeatureSection_2' imageSrc='/images/service/hotel_03.png' /></div>

        <div><ProjectIntroSection messageRoot='SolutionsPage.projectIntroSection_3' imageSrc='/images/service/team-1.png' /></div>
        <div><SystemArchitectureSection messageRoot='SolutionsPage.systemArchitectureSection_3' imageSrc='/images/service/team-2.png'/></div>
        <div><KeyFeatureSection messageRoot='SolutionsPage.keyFeatureSection_3' imageSrc='/images/service/team-3.png' /></div>
    </>
  );
}
