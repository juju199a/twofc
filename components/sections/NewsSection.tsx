'use client'
import common from '@/styles/sections/sections.module.css'
import styles from '@/styles/sections/news.module.css'
import NewsCard from '../ui/NewsCard'
import { motion, useAnimation} from 'framer-motion'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'


export default function NewsSection() {
    const COUNT = 2 // 원본 카드 수
    const CARD_W = 340 // 카드 폭(px)
    const GAP = 80 // 카드 간격(px)
    const STEP = CARD_W + GAP // 한 칸 이동 거리

    const controls = useAnimation()

    useEffect(() => {
        let i = 0
        let alive = true

        const run = async () => {
            while (alive) {
                await controls.start({
                    x: -((i + 1) * STEP),
                    transition: { duration: 0.9, ease: 'easeInOut' }
                });
                await new Promise((r) => setTimeout(r, 1200)); // 잠깐 멈춤

                i += 1;
                if (i >= COUNT) {
                    await controls.set({ x: 0 })
                    i = 0
                }
            }
        }

        run()
        return () => {
            alive = false
        }
    }, [controls, STEP, COUNT])

    return (
        <div className={`${common['wrapper-base']} ${styles['wrapper']}`}>
            <section className={`${common['section-base']} ${styles['section']}`}>
                <div className={`${common['container-base']} ${styles['container']}`}>
                    <div className={styles['heading']}>
                        <div className={styles['big']}>
                            News
                        </div>
                    </div>
                    <div className={styles['news-list']}>
                        <motion.div
                            className={styles['track']}
                            animate={controls}>
                            <NewsCard />
                            <NewsCard />
                            <NewsCard />
                            <NewsCard />
                        </motion.div>
                    </div>
                </div>
            </section>    
        </div>
    )
}