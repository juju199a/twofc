import common from '@/styles/sections/sections.module.css'
import styles from '@/styles/sections/technologystack.module.css'
import TechCard from '../ui/TechCard'
import { useTranslations } from 'next-intl';

export default function TechnologyStackSection() {

    const t = useTranslations('LandingPage.technologyStackSection');
    const messages = {
        title: t('headingTitle')
    };

    return (
        <div className={`${common['wrapper-base']} ${styles['wrapper']}`}>
            <section className={`${common['section-base']} ${styles['section']}`}>
                <div className={`${common['container-base']} ${styles['container']}`}>
                    <div className={styles['heading']}>
                        <div className={styles['big']}>
                            {messages.title}
                        </div>
                    </div>
                    <div className={styles['stacks']}>
                        <TechCard category="FrontEnd" title="Front End"/>
                        <TechCard category="BackEnd" title="Back End"/>
                        <TechCard category="Database" title="Database"/>
                        <TechCard category="Server" title="Server"/>
                    </div>
                </div>
            </section>
        </div>
    )
}

