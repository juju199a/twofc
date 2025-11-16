import styles from '@/styles/sections/systemarchitecture.module.css'
import Image from 'next/image';
import { useTranslations } from 'next-intl';

type SystemArchitectureProps = {
    messageRoot: string;
    imageSrc: string;
};

export default function SystemArchitectureSection({messageRoot, imageSrc}: SystemArchitectureProps) {

    const t = useTranslations(messageRoot);
    const messages = {
        title: t('title'),
        descriptions: t.raw("description") // ← 배열 그대로 가져옴
    };

    return (
        <div className={`${styles['wrapper']}`}>
            <section className={`${styles['section']}`}>
                <div className={styles['heading']}>
                    <div className={styles['title']}>
                        {messages.title}
                    </div>
                    <div className={styles['contents']}>
                        {messages.descriptions.map((desc, index) => (
                            <div key={index} className={styles['description']}>
                            <span className={styles['checkIcon']} aria-hidden="true">
                                
                                <svg viewBox="0 -960 960 960">
                                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                                </svg>

                            </span>
                            <span className={styles['text']}>{desc}</span>
                            </div>
                        ))}
                    </div>


                </div>
                <div className={styles['image']}>
                    <Image
                        src={imageSrc}
                        alt=""
                        width={568}
                        height={467}
                        style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                    />
                </div>
            </section>
        </div>

    )


}