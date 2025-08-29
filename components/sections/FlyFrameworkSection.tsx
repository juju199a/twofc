import common from '@/styles/sections/sections.module.css'
import styles from '@/styles/sections/flyframework.module.css'
import FrameworkCard from '../ui/FrameworkCard'
import AnimatedBarChart from '../ui/AnimatedBarChart';
import { useTranslations } from 'next-intl';

export default function FlyFrameworkSection() {

    const t = useTranslations('LandingPage.flyFrameworkSection');
    const messages = {
        headingTitle: t('headingTitle'),
        headingSubTitle : t('headingSubTitle'),
    };

    const speed = useTranslations('LandingPage.flyFrameworkSection.Speed');
    const costSaving = useTranslations('LandingPage.flyFrameworkSection.CostSaving');
    const integration = useTranslations('LandingPage.flyFrameworkSection.Integration');
    const component = useTranslations('LandingPage.flyFrameworkSection.Component');
    const operations = useTranslations('LandingPage.flyFrameworkSection.Operations');
    
    return (
        <div className={`${common['wrapper-base']} ${styles['wrapper']}`}>
            <section className={`${common['section-base']} ${styles['section']}`}>
                <div className={`${common['container-base']} ${styles['container']}`}>
                    <div className={styles['heading']}>
                        <div className={styles['big']}>
                            {messages.headingTitle}
                        </div>
                        <div className={styles['small']}>
                            {messages.headingSubTitle}
                        </div>
                    </div>
                    <div className={styles['contents']}>
                        <div className={styles['media']}>
                            <AnimatedBarChart />
                        </div>
                        <div className={styles['features']}>
                            <FrameworkCard category="Speed" title={speed('title')} description={speed('description')} />
                            <FrameworkCard category="CostSaving" title={costSaving('title')} description={costSaving('description')} />
                            <FrameworkCard category="Integration" title={integration('title')} description={integration('description')} />
                            <FrameworkCard category="Component" title={component('title')} description={component('description')} />
                            <FrameworkCard category="Operations" title={operations('title')} description={operations('description')} />
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )


}