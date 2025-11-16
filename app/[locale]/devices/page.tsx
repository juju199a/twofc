import ImageEmptyPatternSection from "@/components/sections/ImageEmptyPatternSection";
import ImageLeftPatternSection from "@/components/sections/ImageLeftPatternSection";
import ImageRightPatternSection from "@/components/sections/ImageRightPatternSection";
import KeyFeatureSection from "@/components/sections/KeyFeatureSection";
import OverviewSection from "@/components/sections/OverviewSection";
import ProjectIntroSection from "@/components/sections/ProjectIntroSection";
import SystemArchitectureSection from "@/components/sections/SystemArchitectureSection";

export default function Page() {
  
  return (
    <>
        <div><OverviewSection messageRoot='DevicesPage.overviewSection' mediaUrl='https://www.youtube.com/embed/wOt3D5IGHj4' /></div>
        <div><ImageRightPatternSection messageRoot='DevicesPage.deviceProjectSection_1' imageSrc='/images/devices/Devices-01.png' /></div>
        <div><ImageLeftPatternSection messageRoot='DevicesPage.deviceProjectSection_2' imageSrc='/images/devices/Devices-02.png' /></div>
        <div><ImageRightPatternSection messageRoot='DevicesPage.deviceProjectSection_3' imageSrc='/images/devices/Devices-03.png' /></div>
        <div><ImageLeftPatternSection messageRoot='DevicesPage.deviceProjectSection_4' imageSrc='/images/devices/Devices-04.png' /></div>
        <div><ImageRightPatternSection messageRoot='DevicesPage.deviceProjectSection_5' imageSrc='/images/devices/Devices-05.png' /></div>
        <div><ImageLeftPatternSection messageRoot='DevicesPage.deviceProjectSection_6' imageSrc='/images/devices/Devices-06.png' /></div>
        <div><ImageEmptyPatternSection messageRoot='DevicesPage.deviceProjectEtc' /></div>
    </>
  );
}
