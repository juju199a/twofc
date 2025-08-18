import { useEffect, useRef, useState } from "react";

interface Language {
    code: string;
    label: string;
}

interface LanguageSelectProps {
    languages: Language[];
    value: string;
    onChange: (code: string) => void;
    placeholder?: string;
}

function LanguageSelect({languages, value, onChange, placeholder="Select language"}: LanguageSelectProps) {
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
        };
        document.addEventListener("mousedown", onDocMouseDown);
        return () => document.removeEventListener("mousedown", onDocMouseDown)
    }, [])



}