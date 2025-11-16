import styles from '@/styles/sections/imageleftpattern.module.css'
import Image from 'next/image';
import { useTranslations } from 'next-intl';

type ImageLeftPatternProps = {
    messageRoot: string;
    imageSrc: string;
};

export default function ImageLeftPatternSection({messageRoot, imageSrc}: ImageLeftPatternProps) {

    const t = useTranslations(messageRoot);
    const messages = {
        title: t('title'),
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
                    <div className={styles['image']}>
                        <Image
                            src={imageSrc}
                            alt=""
                            width={568}
                            height={467}
                            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                        />
                    </div>
                    <div className={styles['contents']}>
                        <div className={`${styles['description']} ${styles['multilang-text']}`}>
                            {messages.description}
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )


}