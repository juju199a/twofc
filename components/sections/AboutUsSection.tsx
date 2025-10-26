import styles from '@/styles/sections/aboutus.module.css';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function AboutUsSection() {

    const t = useTranslations('AboutPage.aboutUsSection');

    const title_image = "/images/about/server.jpg";
    return (
        <div className={styles['wrapper']}>
            <section className={styles['section']} >
                <div className={styles['title']}>
                    <div className={styles['big']}>
                        About Us
                    </div>
                    <div className={styles['image']}>
                        <Image src={title_image} alt="" fill style={{ objectFit: 'cover' }}/>
                    </div>
                </div>
                <div className={styles['container']}>
                    <div className={styles['greeting1']}>
                        {t('greeting1.0')}<br/>
                        {t('greeting1.1')}<br/> 
                        {t('greeting1.2')}
                    </div>
                    <div className={styles['greeting2']}>
                        {t('greeting2.0')}<br/>
                        {t('greeting2.1')}<br/> 
                        {t('greeting2.2')}<br/>
                        {t('greeting2.3')}
                    </div>
                    <div className={styles['greeting3']}>
                        <div className={styles['title']}>2FC CEO</div>
                        <div className={styles['signature']}>Soon hong Lee</div>
                    </div>
                </div>
            </section>
        </div>
    );

}