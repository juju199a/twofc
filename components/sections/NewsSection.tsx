import common from '@/styles/sections/sections.module.css'
import styles from '@/styles/sections/news.module.css'

export default function NewsSection() {

return (
        <div className={`${common['wrapper-base']} ${styles['wrapper']}`}>
            <section className={`${common['section-base']} ${styles['section']}`}>
                <div className={`${common['container-base']} ${styles['container']}`}>
                    <div className={styles['heading']}>
                        <div className={styles['big']}>
                            News
                        </div>
                    </div>
                    <div className={styles['news-list']}>
                        <div className={styles['news']}>News1</div>
                        <div className={styles['news']}>News2</div>
                        <div className={styles['news']}>News3</div>
                    </div>
                </div>
            </section>    
        </div>
    )
}