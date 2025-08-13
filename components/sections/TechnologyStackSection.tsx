import common from '@/styles/sections/sections.module.css'
import styles from '@/styles/sections/technologystack.module.css'

export default function TechnologyStackSection() {

    return (
        <div className={`${common['wrapper-base']} ${styles['wrapper']}`}>
            <section className={`${common['section-base']} ${styles['section']}`}>
                <div className={`${common['container-base']} ${styles['container']}`}>
                    <div className={styles['heading']}>
                        <div className={styles['big']}>
                            Technology Stack
                        </div>
                    </div>
                    <div className={styles['stacks']}>
                        <div className={styles['stack']}>Stack1</div>
                        <div className={styles['stack']}>Stack2</div>
                        <div className={styles['stack']}>Stack3</div>
                        <div className={styles['stack']}>Stack4</div>
                    </div>
                </div>
            </section>
        </div>
    )
}

