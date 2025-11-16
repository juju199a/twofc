import styles from '@/styles/sections/projectintro.module.css'
import Image from 'next/image';
import { useTranslations } from 'next-intl';

type ProjectIntroProps = {
    messageRoot: string;
    imageSrc: string;
};

export default function ProjectIntroSection({messageRoot, imageSrc}: ProjectIntroProps) {

    const t = useTranslations(messageRoot);
    const messages = {
        title: t('title'),
        summary : t('summary'),
        description : t('description'),
    };

    return (
        <div className={`${styles['wrapper']}`}>
            <section className={`${styles['section']}`}>
                <div className={styles['heading']}>
                    <div className={styles['title']}>
                        {messages.title}
                    </div>
                </div>
                <div className={`${styles['container']}`}>
                    <div className={styles['contents']}>
                        <div className={styles['summary']}>
                            {messages.summary}
                        </div>
                        <div className={`${styles['description']} ${styles['multilang-text']}`}>
                            {messages.description}
                        </div>
                    </div>
                    <div className={styles['image']}>
                        <Image src={imageSrc} alt="" fill style={{ objectFit: 'cover' }}/>
                    </div>
                </div>
            </section>
        </div>

    )


}