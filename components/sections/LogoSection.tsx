import styles from '@/styles/sections/logo.module.css'
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function LogoSection() {

    const t = useTranslations('AboutPage.logoSection');
    const title_image = "/images/2fc_logo_full.png";

    return (
        <div className={styles['wrapper']}>
            <section className={styles['section']}>
                <div className={styles['container']}>
                    <div className={styles['heading']}>
                        <div className={styles['big']}>
                            {t('headingTitle')}
                        </div>
                    </div>
                    <div className={styles['logobox']}>
                        <div className={styles['logoImage']}>
                            <div className={styles['image']}>
                                <Image src={title_image} alt="" fill style={{ objectFit: 'cover' }}/>
                            </div>
                            <div className={styles['logoLine1']}>
                                <svg viewBox="0 0 120 80" width="120" height="80">
                                <polyline
                                    points="10,110 80,30 170,30"
                                    fill="none"
                                    stroke="#A6BBD1"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <animate
                                        attributeName="stroke-dashoffset"
                                        from="1000"
                                        to="0"
                                        dur="1.5s"
                                        repeatCount="indefinite"
                                        />
                                </polyline>
                                </svg>
                            </div>
                            <div className={styles['logoText1']}>{t('logoMaster1')}</div>
                            <div className={styles['logoLine2']}>

                                <svg viewBox="0 0 160 140" width="160" height="140">
                                <polyline
                                    points="80,30 10,110 70,110"
                                    fill="none"
                                    stroke="#A6BBD1"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                </svg>

                            </div>
                            <div className={styles['logoText2']}>{t('logoMaster2')}</div>
                            
                        </div>
                        <ul className={styles['description']}>
                            <li className={styles['logoDetail']}>{t('logoDetail1')}</li>
                            <li className={styles['logoDetail']}>{t('logoDetail2')}</li>
                            <li className={styles['logoDetail']}>{t('logoDetail3')}</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}