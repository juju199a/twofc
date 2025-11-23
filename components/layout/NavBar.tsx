"use client";
import styles from "@/styles/layout/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import LanguageDropdown from "../ui/LanguageDropdown";
import { useLocale } from "next-intl";
import SubNavBar from "./ServiceNavBar";
import { useState } from "react";
import ServiceNavBar from "./ServiceNavBar";
import SolutionsNavBar from "./SolutionsNavBar";
import DevicesNavBar from "./DevicesNavBar";

type MenuKey = 'service' | 'solutions' | 'devices' | null;

function lhref(path: string, locale: string) {
  return `/${locale}${path === '/' ? '' : path}`;
}

export default function NavBar() {

    const locale = useLocale();

    const [currentTopMenu, setCurrentTopMenu] = useState<MenuKey>(null);

    const [activeService, setActiveService] = useState<MenuKey>(null);
    const [activeSolutions, setActiveSolutions] = useState<MenuKey>(null);
    const [activeDevices, setActiveDevices] = useState<MenuKey>(null);

    const handleMouseLeaveWrapper = () => {
        setActiveService(null);
        setActiveSolutions(null);
        setActiveDevices(null);
    };

    const handleMouseEnterService = () => {
        setActiveService('service');
        setActiveSolutions(null);
        setActiveDevices(null);
    }

    const handleMouseEnterSolutions = () => {
        setActiveService(null);
        setActiveSolutions('solutions');
        setActiveDevices(null);
    }

    const handleMouseEnterDevices = () => {
        setActiveService(null);
        setActiveSolutions(null);
        setActiveDevices('devices');
    }

    return (
        <div className={styles.wrappper} onMouseLeave={handleMouseLeaveWrapper}>
            <div className={styles.container}>
                <div>
                    <Link href={lhref('/', locale)}>
                        <Image src="/images/2fc_logo_full.png" alt="2FC logo" width={140} height={52}></Image>
                    </Link>
                </div>
                <nav>
                    <ul className={styles['menu']}>
                        <li onMouseEnter={() => handleMouseEnterService()}>
                            <Link href={lhref('/service', locale)} className={activeService == 'service' || currentTopMenu === 'service' ? styles.activeLink : undefined}>IT Service</Link>
                        </li>
                        <li onMouseEnter={() => handleMouseEnterSolutions()}>
                            <Link href={lhref('/solutions', locale)}  className={activeSolutions == 'solutions'  || currentTopMenu === 'solutions' ? styles.activeLink : undefined}>Solutions</Link>
                        </li>
                        <li onMouseEnter={() => handleMouseEnterDevices()}>
                            <Link href={lhref('/devices', locale)} className={activeDevices === 'devices'  || currentTopMenu === 'devices' ? styles.activeLink : undefined}>Devices</Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles['button-box']}>
                    <LanguageDropdown />
                    <Link href={lhref('/contact', locale)}>
                        <button className={styles['button']}>Contact</button>
                    </Link>
                    
                </div>
            </div>
            {activeService && (
                <div className={`${styles.subNavBar} ${styles.subNavBarVisible}`}>
                    <div className={styles.subPill}>
                        <ServiceNavBar onSelect={() => setCurrentTopMenu('service')}/>
                    </div>
                </div>   
            )}
            {activeSolutions && (
                <div className={`${styles.subNavBar} ${styles.subNavBarVisible}`}>
                    <div className={styles.subPill}>
                        <SolutionsNavBar onSelect={() => setCurrentTopMenu('solutions')}/>
                    </div>
                </div>   
            )}
            {activeDevices && (
                <div className={`${styles.subNavBar} ${styles.subNavBarVisible}`}>
                    <div className={styles.subPill}>
                        <DevicesNavBar onSelect={() => setCurrentTopMenu('devices')}/>
                    </div>
                </div>   
            )}
        </div>
    )
}