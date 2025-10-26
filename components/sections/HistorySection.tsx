import styles from '@/styles/sections/history.module.css'
import ProjectCard from '../ui/ProjectCard'
import { useTranslations } from 'next-intl';
import IntroductionCard from '../ui/IntroductionCard';
import HistoryCard from '../ui/HistoryCard';

export default function HistorySection() {

    const t = useTranslations('AboutPage.historySection');

    return (
        <div className={styles['wrapper']}>
            <section className={styles['section']}>
                <div className={styles['container']}>
                    <div className={styles['heading']}>
                        <div className={styles['big']}>
                            {t('headingTitle')}
                        </div>
                    </div>
                    <div className={styles['histories']}>
                        <HistoryCard year="2024" description={t('history2024')}/>
                        <HistoryCard year="2023" description={t('history2023')}/>
                        <HistoryCard year="2022" description={t('history2022')}/>
                        <HistoryCard year="2021" description={t('history2021')}/>
                        <HistoryCard year="~2020" description={t('history2020')}/>
                    </div>
                </div>
            </section>
        </div>
    )
}