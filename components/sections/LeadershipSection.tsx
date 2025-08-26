import common from '@/styles/sections/sections.module.css'
import styles from '@/styles/sections/leadership.module.css'
import LeadershipCard from '../ui/LeadershipCard'

export default function LeadershipSection() {

return (
        <div className={`${common['wrapper-base']} ${styles['wrapper']}`}>
            <section className={`${common['section-base']} ${styles['section']}`}>
                <div className={`${common['container-base']} ${styles['container']}`}>
                    <div className={styles['heading']}>
                        <div className={styles['big']}>
                            Leadership
                        </div>
                        <div className={styles['small']}>
                            우리 팀은 고객의 성공을 가장 중요한 가치로 여기며, <br/>
                            명확한 목표와 실행력으로 모든 가능성을 현실로 만듭니다.
                        </div>
                    </div>
                    <div className={styles['staffs']}>
                        <LeadershipCard category='PARK' name='Jun-ho Park' title='Software Team Leader' email='abc@2fc.co.kr'/>
                        <LeadershipCard category='LEE' name='Sun-hong Lee' title='CEO' email='abc@2fc.co.kr'/>
                        <LeadershipCard category='KIM' name='Ki-dong Kim' title='Hardware Team Leader' email='abc@2fc.co.kr'/>
                    </div>
                </div>
            </section>    
        </div>
    )
}