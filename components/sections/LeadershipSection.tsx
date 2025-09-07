import common from '@/styles/sections/sections.module.css'
import styles from '@/styles/sections/leadership.module.css'
import LeadershipCard from '../ui/LeadershipCard'
import {useTranslations} from 'next-intl';

export default function LeadershipSection() {

    const t = useTranslations('LandingPage.leadershipSection');
    const messages = {
        title: t('headingTitle'),
        subtitle : t('headingSubTitle'),
    };

    return (
        <div className={`${common['wrapper-base']} ${styles['wrapper']}`}>
            <section className={`${common['section-base']} ${styles['section']}`}>
                <div className={`${common['container-base']} ${styles['container']}`}>
                    <div className={styles['heading']}>
                        <div className={styles['big']}>
                            {messages.title}
                        </div>
                        <div className={styles['small']}>
                            {messages.subtitle}
                        </div>
                    </div>
                    <div className={styles['staffs']}>
                        <LeadershipCard category='PARK' name='June-ho Park' title='Software Team Leader' email='abc@2fc.co.kr'/>
                        <LeadershipCard category='LEE' name='Soon-hong Lee' title='CEO' email='abc@2fc.co.kr'/>
                        <LeadershipCard category='KIM' name='Ki-dong Kim' title='Hardware Team Leader' email='abc@2fc.co.kr'/>
                    </div>
                </div>
            </section>    
        </div>
    )
}