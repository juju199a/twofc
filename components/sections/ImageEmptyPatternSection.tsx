import styles from '@/styles/sections/imageemptypattern.module.css'
import { useTranslations } from 'next-intl';

type ImageEmptyPatternProps = {
    messageRoot: string;
};

export default function ImageEmptyPatternSection({messageRoot}: ImageEmptyPatternProps) {

    const t = useTranslations(messageRoot);
    const messages = {
        title: t('title'),
        descriptions_left: t.raw("descriptions_left"), // ← 배열 그대로 가져옴
        descriptions_right: t.raw("descriptions_right") // ← 배열 그대로 가져옴
    };

    return (
        <div className={`${styles['wrapper']}`}>
            <section className={`${styles['section']}`}>
                <div className={styles['heading']}>
                    <div className={styles['title']}>
                        {messages.title}
                    </div>
                </div>
                <div className={styles['container']}>
                    <div className={styles['contents']}>
                        {messages.descriptions_left.map((desc, index) => (
                            <div key={index} className={`${styles['description']} ${styles['multilang-text']}`} >
                                {desc}
                            </div>
                        ))}
                    </div>
                    <div className={styles['contents']}>
                        {messages.descriptions_right.map((desc, index) => (
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