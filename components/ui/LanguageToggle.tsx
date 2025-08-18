'use client'

import styles from "@/styles/ui/languagetoggle.module.css";
import { useState } from "react";

export default function LangageToggle() {

    const [open, setOpen] = useState(false);
    
    return (
        <div className={styles['languages-wrapper']}>
            <button className={styles['button-disable']} onClick={() => setOpen(v => !v)}>Korean
                {/* {!language && <span className={styles['icon-mask']} aria-hidden="true" onClick={onClickLanguage}></span>} */}
                {!open && <span className={styles['icon-mask']} aria-hidden="true"></span> }
            </button>
            {open && <div className={styles['languages']}>
                <div>Korean</div>
                <div>English</div>
                <div>Japanese</div>
                <div>Thai</div>
            </div> }
        </div>
    );
}
