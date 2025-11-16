import styles from '@/styles/sections/contact.module.css';
import {useTranslations} from 'next-intl';
import Image from 'next/image';

export default function ContactSection() {

    const t = useTranslations('ContactPage.contactSection');
    const messages = {
        heroSection: t('headingTitle'),
        headingSubTitle : t('headingSubTitle'),
        address: t('address')
    };

    return (
        <div className={styles['wrapper']}>
            <section className={styles['section']} >
                <div className={styles['title']}>
                    <div className={styles['big']}>
                        {messages.heroSection}
                    </div>
                    <div className={styles['small']}>
                        {messages.headingSubTitle}
                    </div>
                </div>
                <div className={styles['container']}>
                    <div className={styles['container-left']}>
                        <div className={styles['map-box']}>
                            <Image src="/images/map.png" alt="map" fill style={{ objectFit: 'cover' }}/>
                        </div>
                        <div className={styles['contact-table']}>
                            <div className={styles['row']}>
                                <div className={styles['label']}>Address</div>
                                <div className={styles['value']}>{messages.address}</div>
                            </div>
                            <div className={styles['row']}>
                                <div className={styles['label']}>Tel</div>
                                <div className={styles['value']}>02-786-9878</div>
                            </div>
                            <div className={styles['row']}>
                                <div className={styles['label']}>FAX</div>
                                <div className={styles['value']}>02-786-9879</div>
                            </div>
                            <div className={styles['row']}>
                                <div className={styles['label']}>Mobile</div>
                                <div className={styles['value']}>010-2551-1689</div>
                            </div>
                            <div className={styles['row']}>
                                <div className={styles['label']}>E-mail</div>
                                <div className={styles['value']}>twofc@2fc.co.kr</div>
                            </div>
              
                        </div>
                    </div>
                    {/* <div className={styles['container-right']}>
                        <div className={styles['input-box']}>
                            <div className={styles['input-label']}>Name</div>
                            <input className={styles['input-text']} />
                        </div>
                        <div className={styles['input-box']}>
                            <div className={styles['input-label']}>E-mail</div>
                            <input className={styles['input-text']} />
                        </div>
                        <div className={styles['input-box']}>
                            <div className={styles['input-label']}>Message</div>
                            <input className={styles['input-text']}/>
                        </div>
                        <div>
                            <button>Send</button>
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
    );

}