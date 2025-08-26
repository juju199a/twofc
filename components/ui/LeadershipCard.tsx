import styles from '@/styles/ui/leadershipcard.module.css';

type LeadershipCardProps = {
    category: string;
    name: string;
    title: string;
    email: string;
};

const images = {
    "LEE": "/images/leader/lee.png",
    "KIM": "/images/leader/kim.png",
    "PARK": "/images/leader/park.png"
}

export default function LeadershipCard({category, name, title, email}: LeadershipCardProps) {

    return (
        <div className={styles['card']}>
            <div className={styles['container']}>
                <img src={images[category]} className={styles['image']}/>
                <div className={styles['footer']}>
                    <div className={styles['name']}>{name}</div>
                    <div className={styles['title']}>{title}</div>
                    <div className={styles['email']}>{email}</div>
                </div>
            </div>
        </div>
    );

}