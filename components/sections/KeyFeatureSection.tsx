import styles from '@/styles/sections/keyfeature.module.css'
import Image from 'next/image';
import { useTranslations } from 'next-intl';

type KeyFeatureProps = {
    messageRoot: string;
    imageSrc: string;
};

export default function KeyFeatureSection({messageRoot, imageSrc}: KeyFeatureProps) {

    const t = useTranslations(messageRoot);
    const messages = {
        title: t('title'),
        descriptions: t.raw("description") // ← 배열 그대로 가져옴
    };

    return (
        <div className={`${styles['wrapper']}`}>
            <section className={`${styles['section']}`}>
                <div className={`${styles['container']}`}>
                    <div className={styles['image']}>
                        <Image src={imageSrc} alt="" fill style={{ objectFit: 'cover' }}/>
                    </div>
                </div>
                <div className={styles['heading']}>
                    <div className={styles['title']}>
                        {messages.title}
                    </div>
                    <div className={styles['contents']}>
                        {messages.descriptions.map((desc, index) => (
                            <div key={index} className={`${styles['description']} ${styles['multilang-text']}`} >
                                {desc}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>

    )


}