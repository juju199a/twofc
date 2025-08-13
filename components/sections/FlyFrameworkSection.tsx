import common from '@/styles/sections/sections.module.css'
import styles from '@/styles/sections/flyframework.module.css'

export default function FlyFrameworkSection() {

    return (
        <div className={`${common['wrapper-base']} ${styles['wrapper']}`}>
            <section className={`${common['section-base']} ${styles['section']}`}>
                <div className={`${common['container-base']} ${styles['container']}`}>
                    <div className={styles['heading']}>
                        <div className={styles['big']}>
                            Fly Framework
                        </div>
                        <div className={styles['small']}>
                            2FC의 프레임워크는 13년간 여러분야 시스템을 개발하면서 만들어진 축적된 기술로 <br/>
                            기업에서 필요한 여러가지 맞춤형 솔루션으로 제공 하고 있습니다.
                        </div>
                    </div>
                    <div className={styles['contents']}>
                        <div className={styles['media']}></div>
                        <div className={styles['features']}>
                            <div className={styles['feature']}>Feature1</div>
                            <div className={styles['feature']}>Feature2</div>
                            <div className={styles['feature']}>Feature3</div>
                            <div className={styles['feature']}>Feature4</div>
                            <div className={styles['feature']}>Feature5</div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>

    )


}