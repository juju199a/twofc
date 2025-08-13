import styles from '@/styles/sections/feature.module.css';

export default function Feature() {

    return (
        <div className={styles['feature']}>
            <section className={styles['section']}>
                <div className={styles['container']}>
                    <div className={styles['heading']}>
                        <div className={styles['big']}>
                            The 2FC framework makes IT systems simple.
                        </div>
                        <div className={styles['small']}>
                            2FC는 풍부하고 전문적인 기술력으로 고객의 IT 과제를 빠르게 해결합니다.
                        </div>
                    </div>
                    <div className={styles['cards']}>
                        <div className={styles['card']}>Card1</div>
                        <div className={styles['card']}>Card2</div>
                        <div className={styles['card']}>Card3</div>
                    </div>
                </div>
            </section>    
        </div>
    )
}