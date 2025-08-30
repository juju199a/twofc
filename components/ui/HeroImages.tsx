"use client";
import styles from '@/styles/ui/heroimages.module.css';
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroImages() {
  const [swap, setSwap] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setSwap(v => !v), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.stage} data-swap={swap ? 'b' : 'a'}>
      {/* 앞쪽 패널 */}
      <div className={`${styles.panel} ${swap ? styles.back : styles.front}`}>
        <Image src="/images/hero1.png" alt="hero1" fill className={styles.img}/>
      </div>

      {/* 뒤쪽 패널 */}
      <div className={`${styles.panel} ${swap ? styles.front : styles.back}`}>
        <Image src="/images/hero2.png" alt="hero2" fill className={styles.img}/>
      </div>
    </div>
  );
}
