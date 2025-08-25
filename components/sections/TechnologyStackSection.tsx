import common from '@/styles/sections/sections.module.css'
import styles from '@/styles/sections/technologystack.module.css'
import TechCard from '../ui/TechCard'

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
                        <TechCard category="FrontEnd" title="Front End"/>
                        <TechCard category="BackEnd" title="Back End"/>
                        <TechCard category="Database" title="Database"/>
                        <TechCard category="Server" title="Server"/>
                    </div>
                </div>
            </section>
        </div>
    )
}

