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
        <div><OverviewSection messageRoot='ServicePage.overviewSection' mediaUrl='https://www.youtube.com/embed/wOt3D5IGHj4' /></div>
        <div id="project1" ref={project1}><ProjectIntroSection messageRoot='ServicePage.projectIntroSection_1' imageSrc='/images/service/flyoffice_00.png' /></div>
        <div><SystemArchitectureSection messageRoot='ServicePage.systemArchitectureSection_1' imageSrc='/images/service/flyoffice_02.png' /></div>
        <div><KeyFeatureSection messageRoot='ServicePage.keyFeatureSection_1' imageSrc='/images/service/flyoffice_03.png' /></div>

        <div id="project2" ref={project2}><ProjectIntroSection messageRoot='ServicePage.projectIntroSection_2' imageSrc='/images/service/hotel_01.png' /></div>
        <div><SystemArchitectureSection messageRoot='ServicePage.systemArchitectureSection_2' imageSrc='/images/service/hotel_02.png'/></div>
        <div><KeyFeatureSection messageRoot='ServicePage.keyFeatureSection_2' imageSrc='/images/service/hotel_03.png' /></div>

        <div id="project3" ref={project3}><ProjectIntroSection messageRoot='ServicePage.projectIntroSection_3' imageSrc='/images/service/team-1.png' /></div>
        <div><SystemArchitectureSection messageRoot='ServicePage.systemArchitectureSection_3' imageSrc='/images/service/team-2.png'/></div>
        <div><KeyFeatureSection messageRoot='ServicePage.keyFeatureSection_3' imageSrc='/images/service/team-3.png' /></div>
    </>
  );
}
