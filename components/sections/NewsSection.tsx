'use client'
import common from '@/styles/sections/sections.module.css'
import styles from '@/styles/sections/news.module.css'
import NewsCard from '../ui/NewsCard'
import { motion, useAnimation} from 'framer-motion'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'


export default function NewsSection() {
    const controls = useAnimation()
    const listRef = useRef<HTMLDivElement>(null)
    const [clientW, setClientW] = useState(0)
    const [scrollW, setScrollW] = useState(0)

    // 측정
    useEffect(() => {
        const el = listRef.current
        if (!el) return
        const measure = () => {
            setClientW(el.clientWidth)
            setScrollW(el.scrollWidth) // (복제된 트랙 전체 길이)
        }
        measure()
        const ro = new ResizeObserver(measure)
        ro.observe(el)
        const t1 = setTimeout(measure, 50)
        const t2 = setTimeout(measure, 200)
        return () => { ro.disconnect(); clearTimeout(t1); clearTimeout(t2) }
    }, [])

    // 끊김 없는 마키(선형 반복)
    useEffect(() => {
        if (!clientW || !scrollW) return
        const halfW = scrollW / 2        // 원본 한 벌의 길이
        if (halfW <= clientW) return     // 이동할 여유 없으면 애니메이션 생략

        const SPEED = 60                 // px/sec (원하는 속도로 조절)
        const duration = halfW / SPEED   // halfW만큼 이동하는 데 걸리는 시간

        controls.start({
            x: [0, -halfW],
            transition: {
            duration,
            ease: 'linear',
            repeat: Infinity,          // 무한 반복
            repeatType: 'loop'
            }
        })
    }, [clientW, scrollW, controls])

    // 카드 8개(원본) + 그대로 한 벌 더(복제)
    const Cards =
        <>
            <NewsCard category='NEWS1' title="Thailand System Contract Signed" date="July 2025" description=""/>
            <NewsCard category='NEWS2' title="Tokyo System Contract Signed" date="Februry 2025" description=""/>
            <NewsCard category='NEWS3' title="New York System Contract Signed" date="September 2024" description=""/>
            <NewsCard category='NEWS4' title="Osaka System Contract Signed" date="May 2024" description=""/>
            <NewsCard category='NEWS5' title="Thailand System Contract Signed" date="April 2024" description=""/>
            <NewsCard category='NEWS6' title="Seoul System Contract Signed" date="December 2023" description=""/>
            <NewsCard category='NEWS7' title="Tokyo System Contract Signed" date="August 2023" description=""/>
            <NewsCard category='NEWS8' title="Seoul System Contract Signed" date="March 2023" description=""/>
        </>

    return (
        <div className={`${common['wrapper-base']} ${styles['wrapper']}`}>
            <section className={`${common['section-base']} ${styles['section']}`}>
                <div className={`${common['container-base']} ${styles['container']}`}>
                    <div className={styles['heading']}>
                        <div className={styles['big']}>
                            News
                        </div>
                    </div>
                    <div className={styles['news-list']} ref={listRef}>
                        <motion.div className={styles['track']} animate={controls}>
                            {Cards}
                                
                                {/* 카드 콘텐츠
                                - 원본 8개를 한 벌로 만들고, 같은 내용을 한 벌 더 이어붙인다.
                                (렌더 결과: 16개가 줄지어 있지만, halfW 기준으로 루프되므로 과렌더처럼 느껴지지 않음)
                                
                                - 실제 데이터가 배열이라면 map으로 1벌을 만들고 {list}{list} 식으로 복제하는 것이 정석.
                                  여기서는 사용 중인 정적 8개의 예시를 그대로 유지. */}
                                
                            {Cards}
                        </motion.div>
                    </div>
                </div>
            </section>    
        </div>
    )
}