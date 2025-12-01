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

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <div className={styles.wrapper} onMouseLeave={handleMouseLeaveWrapper}>
            <div className={styles.container}>
                <div className={styles['logo-box']}>
                    <Link href={lhref('/', locale)}>
                        <Image src="/images/2fc_logo_full.png" alt="2FC logo" className={styles['logo']} width={140} height={52}></Image>
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
                <button
                    type="button"
                    className={styles.hamburger}
                    onClick={() => setIsMobileMenuOpen(prev => !prev)}
                    aria-label="메뉴 열기"
                    >
                    <svg height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                    </svg>
                </button>
            </div>
            {/* 모바일 사이드 메뉴 오버레이 */}
                {isMobileMenuOpen && (
                <div
                    className={styles.mobileMenuOverlay}
                    onClick={() => setIsMobileMenuOpen(false)}
                />
                )}

                {/* 모바일 사이드 메뉴 패널 */}
                <div
                className={`${styles.mobileMenu} ${
                    isMobileMenuOpen ? styles.mobileMenuOpen : ''
                }`}
                >
                <div className={styles.mobileMenuHeader}>
                    <span>Menu</span>
                    <button
                    type="button"
                    className={styles.mobileClose}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="메뉴 닫기"
                    >
                    ×
                    </button>
                </div>

                <div className={styles.mobileMenuBody}>
                    <ul>
                    <li>
                        <Link href={lhref('/service', locale)} onClick={() => setIsMobileMenuOpen(false)}>
                        IT Service
                        </Link>
                    </li>
                    <li>
                        <Link href={lhref('/solutions', locale)} onClick={() => setIsMobileMenuOpen(false)}>
                        Solutions
                        </Link>
                    </li>
                    <li>
                        <Link href={lhref('/devices', locale)} onClick={() => setIsMobileMenuOpen(false)}>
                        Devices
                        </Link>
                    </li>
                    </ul>

                    <div className={styles.mobileBottom}>
                    <LanguageDropdown />
                    <Link href={lhref('/contact', locale)} onClick={() => setIsMobileMenuOpen(false)}>
                        <button className={styles.button}>Contact</button>
                    </Link>
                    </div>
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