import styles from "@/styles/layout/devicesnavbar.module.css";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import type { MouseEventHandler } from "react";

function lhref(path: string, locale: string) {
  return `/${locale}${path === '/' ? '' : path}`;
}

const HEADER_OFFSET = 80; // 고정 헤더 높이에 맞게 조절

export default function DevicesNavBar({ onSelect }) {
  const locale = useLocale();

  const t = useTranslations('Menu.devices');

  const project1 = lhref("/devices", locale) + "?section=project1";
  const project2 = lhref("/devices", locale) + "?section=project2";
  const project3 = lhref("/devices", locale) + "?section=project3";
  const project4 = lhref("/devices", locale) + "?section=project4";
  const project5 = lhref("/devices", locale) + "?section=project5";
  const project6 = lhref("/devices", locale) + "?section=project6";
  const project7 = lhref("/devices", locale) + "?section=project7";

  const handleProject1Click: MouseEventHandler<HTMLAnchorElement> = (e) => {
    onSelect();

    const el = document.getElementById("project1");
    if (!el) { return; }
    
    e.preventDefault();

    const rect = el.getBoundingClientRect();
    const targetY = window.scrollY + rect.top - HEADER_OFFSET;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
    
  };

  const handleProject2Click: MouseEventHandler<HTMLAnchorElement> = (e) => {
    onSelect();

    const el = document.getElementById("project2");
    if (!el) { return; }
    
    e.preventDefault();

    const rect = el.getBoundingClientRect();
    const targetY = window.scrollY + rect.top - HEADER_OFFSET;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });

    
  };

  const handleProject3Click: MouseEventHandler<HTMLAnchorElement> = (e) => {
    onSelect();
    
    const el = document.getElementById("project3");
    if (!el) { return; }
    
    e.preventDefault();

    const rect = el.getBoundingClientRect();
    const targetY = window.scrollY + rect.top - HEADER_OFFSET;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });

    
  };

  const handleProject4Click: MouseEventHandler<HTMLAnchorElement> = (e) => {
    onSelect();
    
    const el = document.getElementById("project4");
    if (!el) { return; }
    
    e.preventDefault();

    const rect = el.getBoundingClientRect();
    const targetY = window.scrollY + rect.top - HEADER_OFFSET;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });

    
  };

  const handleProject5Click: MouseEventHandler<HTMLAnchorElement> = (e) => {
    onSelect();
    
    const el = document.getElementById("project5");
    if (!el) { return; }
    
    e.preventDefault();

    const rect = el.getBoundingClientRect();
    const targetY = window.scrollY + rect.top - HEADER_OFFSET;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });

    
  };

  const handleProject6Click: MouseEventHandler<HTMLAnchorElement> = (e) => {
    onSelect();
    
    const el = document.getElementById("project6");
    if (!el) { return; }
    
    e.preventDefault();

    const rect = el.getBoundingClientRect();
    const targetY = window.scrollY + rect.top - HEADER_OFFSET;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });

    
  };

  const handleProject7Click: MouseEventHandler<HTMLAnchorElement> = (e) => {
    onSelect();
    
    const el = document.getElementById("project7");
    if (!el) { return; }
    
    e.preventDefault();

    const rect = el.getBoundingClientRect();
    const targetY = window.scrollY + rect.top - HEADER_OFFSET;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });

    
  };
  return (
    <div className={styles.wrapper}>
      <nav>
        <ul className={styles['menu']}>
          <li>
            <Link href={project1} onClick={handleProject1Click}>{t('0')}</Link>
          </li>
          <li>
            <Link href={project2} onClick={handleProject2Click}>{t('1')}</Link>
          </li>
          <li>
            <Link href={project3} onClick={handleProject3Click}>{t('2')}</Link>
          </li>
          <li>
            <Link href={project4} onClick={handleProject4Click}>{t('3')}</Link>
          </li>
          <li>
            <Link href={project5} onClick={handleProject5Click}>{t('4')}</Link>
          </li>
          <li>
            <Link href={project6} onClick={handleProject6Click}>{t('5')}</Link>
          </li>
          <li>
            <Link href={project7} onClick={handleProject7Click}>{t('6')}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
