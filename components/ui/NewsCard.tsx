import styles from '@/styles/ui/newscard.module.css';
import Image from 'next/image';

export default function NewsCard() {

    return (
        <div className={styles['card']}>
            <div className={styles['image-wrapper']}>
                <Image src="/images/news/news1.jpg" alt="" width={340} height={190} className={styles['image']}/>
            </div>
            <div className={styles['title-wrapper']}>
                <div className={styles['place']}>Thailand System Contract Signed </div>
                <div className={styles['date']}>July 2025</div>
            </div>
        </div>
    );
}