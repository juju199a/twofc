import styles from '@/styles/sections/overview.module.css';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

type OverviewProps = {
    messageRoot: string;
    mediaUrl: string;
};

export default function OverviewSection({messageRoot, mediaUrl}: OverviewProps) {

    const t = useTranslations(messageRoot);
    const messages = {
        headingTitle: t('headingTitle'),
        description : t('description'),
    };

    const title_image = "/images/about/server.jpg";
    return (
        <div className={styles['wrapper']}>
            <section className={styles['section']} >
                <div className={styles['container']}>
                    <div className={styles['title']}>
                        {messages.headingTitle}
                    </div>
                    <div className={`${styles['description']} ${styles['multilang-text']}`}>
                        {messages.description}
                    </div>
                </div>
                <div className={styles['media']}>
                    <div style={{
                        borderRadius: '5px',
                        overflow: 'hidden',
                        width: '100%',
                        position: 'relative',
                        paddingBottom: '56.25%',
                        height: 0
                        }}>
                        <iframe
                            src={mediaUrl}
                            style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: 0
                            }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                        </div>

                </div>
            </section>
        </div>
    );

}