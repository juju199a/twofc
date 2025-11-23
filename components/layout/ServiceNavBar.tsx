import styles from "@/styles/layout/servicenavbar.module.css";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import type { MouseEventHandler } from "react";

function lhref(path: string, locale: string) {
  return `/${locale}${path === '/' ? '' : path}`;
}

const HEADER_OFFSET = 80; // 고정 헤더 높이에 맞게 조절

export default function ServiceNavBar({ onSelect }) {
  const locale = useLocale();

  const t = useTranslations('Menu.service');

  const project1 = lhref("/service", locale) + "?section=project1";
  const project2 = lhref("/service", locale) + "?section=project2";
  const project3 = lhref("/service", locale) + "?section=project3";

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
        </ul>
      </nav>
    </div>
  );
}
