import styles from '@/styles/sections/featuredprojects.module.css'

export default function FeaturedProjectSection() {

    return (
        <div className={styles['featuredprojects']}>
            <section className={styles['section']}>
                <div className={styles['container']}>
                    <div className={styles['heading']}>
                        <div className={styles['big']}>
                            Featured Prjects
                        </div>
                    </div>
                    <div className={styles['projects']}>
                        <div className={styles['project']}>Project1</div>
                        <div className={styles['project']}>Project2</div>
                        <div className={styles['project']}>Project3</div>
                        <div className={styles['project']}>Project4</div>
                        <div className={styles['project']}>Project5</div>
                        <div className={styles['project']}>Project6</div>
                        <div className={styles['project']}>Project7</div>
                        <div className={styles['project']}>Project8</div>
                        <div className={styles['project']}>Project9</div>
                    </div>
                </div>
            </section>
        </div>
    )
}