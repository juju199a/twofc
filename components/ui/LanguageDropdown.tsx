"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "@/styles/ui/languagedropdown.module.css";
import { AnimatePresence, motion } from "framer-motion";
import {useRouter, usePathname, useSearchParams} from 'next/navigation';
import { useLocale } from "next-intl";
import path from "path";

interface Language {
    code: string;
    label: string;
}

interface LanguageSelectProps {
    languages: Language[];
    value: string;
    onChange: (code: string) => void;
}

function LanguageSelect({languages, value, onChange}: LanguageSelectProps) {
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(() => {
        const idx = languages.findIndex((l) => l.code === value);
        return Math.max(0, idx);
    });

    const rootRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLDivElement | null>(null);
    const listRef = useRef<HTMLDivElement | null>(null);

    const current = languages.find((l) => l.code === value);
    
    //바깥 클릭 닫기
    useEffect(() => {
        const onDocMouseDown = (e:MouseEvent) => {
            if (!rootRef.current) return;
            if (!rootRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
                    console.log('###');
        };
        document.addEventListener("mousedown", onDocMouseDown);
        return () => document.removeEventListener("mousedown", onDocMouseDown)
    }, [])

    // 열릴 때 포커스 & 현재 항목 가시화
    useEffect(() => {
        if (open) {
            const t = window.setTimeout(() => {
                const el = listRef.current?.querySelector<HTMLElement>('[data-active="true"');
                el?.scrollIntoView({block:"nearest"});
                listRef.current?.focus();
            }, 0);
            return () => window.clearTimeout(t);
        }
    }, [open]);

    const toggle = useCallback(() => setOpen((o) => !o), []);
    const close = useCallback(() => setOpen(false), []);

    return (
        <div ref={rootRef} 
            className={styles['language-wrapper']}
            onClick={toggle}
        >
            <div
                ref={buttonRef}
                role="button"
                aria-haspopup="listbox"
                aria-expanded={open}
                
                className={styles['language-button']}
            >
                <div className={current ? "text-gray-900" : "text-gray-400"}>
                    {current ? current.label : ""}
                </div>
                <div className={`${styles['arrow-down']} ${open ? styles['rotate'] : ''}`}>
                    <svg viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M5 7l5 6 5-6" fill="none" stroke="currentColor" strokeWidth={2} />
                    </svg>
                </div>
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div
                        ref={listRef}
                        role="listbox"
                        tabIndex={-1}
                        aria-activedescendant={languages[activeIndex]?.code}
                        className={styles['motion-div']}
                        initial={{ opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
                        animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
                        exit={{ opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
                        transition={{ type: "spring", stiffness: 420, damping: 32, mass: 0.6 }}
                    >
                        <div className={styles['language-listbox']} style={{ willChange: "clip-path, opacity" }}>
                            {languages.map((lang, i) =>{
                                const selected = lang.code === value;

                                return (
                                    <div
                                        key={lang.code}
                                        id={lang.code}
                                        role="option"
                                        aria-selected={selected}
                                        onClick={() => {
                                            onChange(lang.code);
                                        }}
                                        className={`${styles['language-item']}`}
                                    >
                                        <span className="flex-1 text-gray-900">{lang.label}</span>
                                        <div className={styles['language-item-height']}> 
                                            {selected && (
                                            <div className={styles['language-item-selected']}> 
                                                <svg viewBox="0 0 20 20" aria-hidden="true">
                                                    <path d="M7.5 11.5l2 2 4-5" fill="none" stroke="currentColor" strokeWidth={2} />
                                                </svg>
                                            </div>
                                        )}
                                        </div>
                                    </div>    
                                )
                            })}
                        </div>
                    </motion.div>
                )}

            </AnimatePresence>
        </div>
    );
}

export default function LanguageDropdown() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const locale = useLocale();     // 현재 locale (ko/en/ja/th)

    const [lang, setLang] = useState<string>("ko");

    useEffect(() => setLang(locale), [locale]);

    const languages: Language[] = [
        { code: "ko", label: "Korean"},
        { code: "en", label: "English"},
        { code: "ja", label: "Japanese"},
        { code: "th", label: "Thai"}
    ];

    // 현재 path에서 locale(첫 세그먼트)만 교체
    function buildPathWithLocale(pathname: string, to: string, search: string) {
        const parts = pathname.split('/'); // ['', 'ko', 'about'] 같은 형태
        parts[1] = to;
        const base = parts.join('/') || '/';
        return search ? `${base}?${search}` : base;
    }

    function handleLangChange(code:string) {
        setLang(code);

        const nextHref = buildPathWithLocale(
            pathname,
            code,
            searchParams?.toString() ?? ''
        );

        // 디버그: 실제로 바뀌는 경로를 콘솔에서 확인 가능
        console.log('[lang-change]', {pathname, nextHref});

        router.replace(nextHref);
    }

    return (
        <div className={styles['language-select']}>
            <LanguageSelect 
                languages={languages}
                value={lang}
                onChange={handleLangChange}
            />
        </div>
    )


}

