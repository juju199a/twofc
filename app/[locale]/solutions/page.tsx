'use client';
import KeyFeatureSection from "@/components/sections/KeyFeatureSection";
import OverviewSection from "@/components/sections/OverviewSection";
import ProjectIntroSection from "@/components/sections/ProjectIntroSection";
import SystemArchitectureSection from "@/components/sections/SystemArchitectureSection";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Page() {
  
    const searchParams = useSearchParams();
    const section = searchParams.get("section");
  
    // 각 섹션에 ref 연결
    const project1 = useRef<HTMLDivElement | null>(null);
    const project2 = useRef<HTMLDivElement | null>(null);
    const project3 = useRef<HTMLDivElement | null>(null);
  
    useEffect(() => {
      if (!section) return;
  
      const map: Record<string, HTMLElement | null> = {
        "project1": project1.current,
        "project2": project2.current,
        "project3": project3.current,
      };
  
      const target = map[section];
      if (!target) return;
  
      // 부드럽게 스크롤
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, [section]);

  return (
    <>
        <div><OverviewSection messageRoot='SolutionsPage.overviewSection' mediaUrl='https://www.youtube.com/embed/wOt3D5IGHj4' /></div>
        <div id="project1" ref={project1}><ProjectIntroSection messageRoot='SolutionsPage.projectIntroSection_1' imageSrc='/images/solutions/Franchise_01.png' /></div>
        <div><SystemArchitectureSection messageRoot='SolutionsPage.systemArchitectureSection_1' imageSrc='/images/solutions/Franchise_02.png' /></div>
        <div><KeyFeatureSection messageRoot='SolutionsPage.keyFeatureSection_1' imageSrc='/images/solutions/Franchise_03.png' /></div>

        <div id="project2" ref={project2}><ProjectIntroSection messageRoot='SolutionsPage.projectIntroSection_2' imageSrc='/images/solutions/Purchase_01.png' /></div>
        <div><SystemArchitectureSection messageRoot='SolutionsPage.systemArchitectureSection_2' imageSrc='/images/solutions/Purchase_02.png'/></div>
        <div><KeyFeatureSection messageRoot='SolutionsPage.keyFeatureSection_2' imageSrc='/images/solutions/Purchase_03.png' /></div>

        <div id="project3" ref={project3}><ProjectIntroSection messageRoot='SolutionsPage.projectIntroSection_3' imageSrc='/images/solutions/HR_01.png' /></div>
        <div><SystemArchitectureSection messageRoot='SolutionsPage.systemArchitectureSection_3' imageSrc='/images/solutions/HR_02.png'/></div>
        <div><KeyFeatureSection messageRoot='SolutionsPage.keyFeatureSection_3' imageSrc='/images/solutions/HR_03.png' /></div>
    </>
  );
}
