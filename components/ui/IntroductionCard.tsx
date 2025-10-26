import styles from '@/styles/ui/introductioncard.module.css';

type IntroductionCardProps = {
    title: string;
    description: string;
};

export default function IntroductionCard({title, description}: IntroductionCardProps) {

    return (
        <div className={styles['card']}>
            <div className={styles['card-header']}>
                <div className={styles['title']}>{title}</div>
            </div>
            <div className={styles['container']}>
                 <div style={{whiteSpace: 'pre-line'}} className={`${styles['description']} ${styles['multilang-text']}`}>
                   
                        {description}
                   
                </div>
            </div>
        </div>
    );
}