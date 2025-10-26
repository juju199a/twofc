import styles from '@/styles/sections/introduction.module.css'
import ProjectCard from '../ui/ProjectCard'
import { useTranslations } from 'next-intl';
import IntroductionCard from '../ui/IntroductionCard';

export default function IntroductionSection() {

    const t = useTranslations('AboutPage.introductionSection');
    const introduction1 = useTranslations('AboutPage.introductionSection.introdction1');
    const introduction2 = useTranslations('AboutPage.introductionSection.introdction2');
    const introduction3 = useTranslations('AboutPage.introductionSection.introdction3');
    const introduction4 = useTranslations('AboutPage.introductionSection.introdction4');
    const introduction5 = useTranslations('AboutPage.introductionSection.introdction5');
    const introduction6 = useTranslations('AboutPage.introductionSection.introdction6');

    return (
        <div className={styles['wrapper']}>
            <section className={styles['section']}>
                <div className={styles['container']}>
                    <div className={styles['heading']}>
                        <div className={styles['big']}>
                            {t('headingTitle')}
                        </div>
                    </div>
                    <div className={styles['introductions']}>
                        <IntroductionCard title={introduction1('title')} description={introduction1('description')} />
                        <IntroductionCard title={introduction2('title')} description={introduction2('description')} />
                        <IntroductionCard title={introduction3('title')} description={introduction3('description')} />
                        <IntroductionCard title={introduction4('title')} description={introduction4('description')} />
                        <IntroductionCard title={introduction5('title')} description={introduction5('description')} />
                        <IntroductionCard title={introduction6('title')} description={introduction6('description')} />
                    </div>
                </div>
            </section>
        </div>
    )
}