import styles from '@/styles/layout/footer.module.css'
import Image from 'next/image'
import {useTranslations} from 'next-intl';

export default function Footer() {

    const t = useTranslations('LandingPage.footer');
    const messages = {
        address: t('address')
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div>
                    <Image src="/images/2fc_logo_full.png" alt="2FC logo" width={140} height={52}></Image>
                </div>
                <div className={styles.address}>
                    Address: {messages.address}<br/>
                    Tel: 02-786-9878 / Fax: 02-786-9879 / E-mail: twofc@2fc.co.kr<br/>
                    Copyright © 2FC Corp. All Rights Reserved.
                </div>
            </div>
        </div>
    )
}

