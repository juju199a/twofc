'use client';

import ImageEmptyPatternSection from "@/components/sections/ImageEmptyPatternSection";
import ImageLeftPatternSection from "@/components/sections/ImageLeftPatternSection";
import ImageRightPatternSection from "@/components/sections/ImageRightPatternSection";
import OverviewSection from "@/components/sections/OverviewSection";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Page() {
  
  const searchParams = useSearchParams();
  const section = searchParams.get("section");

  // 각 섹션에 ref 연결
  const project1 = useRef<HTMLDivElement | null>(null);
  const project2 = useRef<HTMLDivElement | null>(null);
  const project3 = useRef<HTMLDivElement | null>(null);
  const project4 = useRef<HTMLDivElement | null>(null);
  const project5 = useRef<HTMLDivElement | null>(null);
  const project6 = useRef<HTMLDivElement | null>(null);
  const project7 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!section) return;

    const map: Record<string, HTMLElement | null> = {
      "project1": project1.current,
      "project2": project2.current,
      "project3": project3.current,
      "project4": project3.current,
      "project5": project3.current,
      "project6": project3.current,
      "project7": project3.current,
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
        <div><OverviewSection messageRoot='DevicesPage.overviewSection' mediaUrl='https://www.youtube.com/embed/wOt3D5IGHj4' /></div>
        <div id="project1" ref={project1}><ImageRightPatternSection messageRoot='DevicesPage.deviceProjectSection_1' imageSrc='/images/devices/Devices-01.png' /></div>
        <div id="project2" ref={project2}><ImageLeftPatternSection messageRoot='DevicesPage.deviceProjectSection_2' imageSrc='/images/devices/Devices-02.png' /></div>
        <div id="project3" ref={project3}><ImageRightPatternSection messageRoot='DevicesPage.deviceProjectSection_3' imageSrc='/images/devices/Devices-03.png' /></div>
        <div id="project4" ref={project4}><ImageLeftPatternSection messageRoot='DevicesPage.deviceProjectSection_4' imageSrc='/images/devices/Devices-04.png' /></div>
        <div id="project5" ref={project5}><ImageRightPatternSection messageRoot='DevicesPage.deviceProjectSection_5' imageSrc='/images/devices/Devices-05.png' /></div>
        <div id="project6" ref={project6}><ImageLeftPatternSection messageRoot='DevicesPage.deviceProjectSection_6' imageSrc='/images/devices/Devices-06.png' /></div>
        <div id="project7" ref={project7}><ImageEmptyPatternSection messageRoot='DevicesPage.deviceProjectEtc' /></div>
    </>
  );
}
