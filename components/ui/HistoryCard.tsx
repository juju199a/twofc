import styles from '@/styles/ui/historycard.module.css';

type HistoryCardProps = {
    year: string;
    description: string;
};

export default function HistoryCard({year, description}: HistoryCardProps) {

    return (
        <div className={styles['card']}>
            <div className={styles['card-header']}>
                <div className={styles['year']}>{year}</div>
            </div>
            <div className={styles['circle-line']}></div>
            <div className={styles['container']}>
                 <div style={{whiteSpace: 'pre-line'}}  className={`${styles['description']} ${styles['multilang-text']}`}>
                    {description}
                </div>
            </div>
        </div>
    );
}