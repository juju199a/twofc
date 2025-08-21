import styles from '@/styles/sections/concept.module.css';
import ConceptCard from '../ui/ConceptCard';
import { useTranslations } from 'next-intl';

export default function ConceptSection() {

    const t = useTranslations('LandingPage.conceptSection');
    const messages = {
        headingTitle: t('headingTitle'),
        headingSubTitle : t('headingSubTitle'),
    };

    const itservice = useTranslations('LandingPage.conceptSection.ITService');
    const solutions = useTranslations('LandingPage.conceptSection.Solutions');
    const devices = useTranslations('LandingPage.conceptSection.Devices');

    return (
        <div className={styles['concept']}>
            <section className={styles['section']}>
                <div className={styles['container']}>
                    <div className={styles['heading']}>
                        <div className={styles['big']}>
                            {messages.headingTitle}
                        </div>
                        <div className={styles['small']}>
                            {messages.headingSubTitle}
                        </div>
                    </div>
                    <div className={styles['cards']}>
                        <ConceptCard category='ITService' title={itservice('title')} description={itservice('description')} summaries={[itservice('summaries.0'), itservice('summaries.1'), itservice('summaries.2')]}/>
                        <ConceptCard category='Solutions' title={solutions('title')} description={solutions('description')} summaries={[solutions('summaries.0'), solutions('summaries.1'), solutions('summaries.2')]}/>
                        <ConceptCard category='Devices' title={devices('title')} description={devices('description')} summaries={[devices('summaries.0'), devices('summaries.1'), devices('summaries.2')]}/>
                    </div>
                </div>
            </section>    
        </div>
    )
}