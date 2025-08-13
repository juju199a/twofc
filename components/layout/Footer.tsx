import styles from '@/styles/layout/footer.module.css'
import Image from 'next/image'

export default function Footer() {

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div>
                    <Image src="/images/2fc_logo.svg" alt="2FC logo" width={160} height={59}></Image>
                </div>
                <div className={styles.address}>
                    Address. 서울특별시 영등포구 국제금융로6길 33 13층 11호 투에프씨 주식회사<br/>
                    Tel. 02-786-9878 / Fax. 02-786-9879 / E-mail. twofc@2fc.co.kr<br/>
                    Copyright © 2FC Corp. All Rights Reserved.
                </div>
            </div>
        </div>
    )
}

