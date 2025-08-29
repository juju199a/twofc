import styles from '@/styles/ui/newscard.module.css';
import Image from 'next/image';

type NewsCardProps = {
    category: string;
    title: string;
    date: string;
    description: string;
};

const images = {
    "NEWS1": "/images/news/news1.jpg",
    "NEWS2": "/images/news/news2.jpg",
    "NEWS3": "/images/news/news3.jpg",
    "NEWS4": "/images/news/news4.jpg",
    "NEWS5": "/images/news/news5.jpg",
    "NEWS6": "/images/news/news6.jpg",
    "NEWS7": "/images/news/news7.jpg",
    "NEWS8": "/images/news/news8.jpg"
}

export default function NewsCard({category, title, date, description}: NewsCardProps) {

    return (
        <div className={styles['card']}>
            <div className={styles['image-wrapper']}>
                <Image src={images[category]} alt="" width={340} height={190} className={styles['image']}/>
            </div>
            <div className={styles['title-wrapper']}>
                <div className={styles['title']}>{title}</div>
                <div className={styles['date']}>{date}</div>
            </div>
        </div>
    );
}