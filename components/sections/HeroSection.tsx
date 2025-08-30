import styles from '@/styles/sections/hero.module.css';
import Image from "next/image";
import {useTranslations} from 'next-intl';
import HeroImages from '../ui/HeroImages';

export default function HeroSection() {

  const t = useTranslations('LandingPage.heroSection');
  const messages = {
      heroSection: t('headingTitle'),
      headingSubTitle : t('headingSubTitle'),
      bannerHeading: t('bannerHeading')
  };
  
  return (
    <div className={styles['hero']}>
        <section className={styles['hero-section']} >
            <div className={styles['hero-container']}>
                <div className={styles['hero-container-left']}>
                    <h1>
                      {messages.heroSection}
                    </h1>
                    <h2 className={styles['multilang-text']}>
                      {messages.headingSubTitle}
                    </h2>
                    <div className={styles['button-box']}>
                      <div>
                        <button className={styles['button']}>Our Projects</button>
                      </div>
                      <div>
                        <button className={styles['button-disable']}>About Us</button>
                      </div>                      
                    </div>
                </div>
                <HeroImages />
            </div>
            <div className={styles['hero-banner-container']}>
                <div className={styles['heading']}>{messages.bannerHeading}</div>
                {/* 무한 루프 래퍼 */}
                <div className={styles['clientsLoop']}>
                  <ul className={styles['track']}>
                    {/* === 1세트 === */}
                    <li><Image src="/images/logos/mono/CAZ-Logo.png" alt="AZ" width={32} height={32} style={{display:'block'}}/></li>
                    <li><Image src="/images/logos/mono/CEYEON Technology.png" alt="CEYEON" width={103} height={32} style={{display:'block'}}/></li>
                    <li><Image src="/images/logos/mono/DANKOOK UNIVERSTY.png" alt="단국대" width={138} height={32} style={{display:'block'}}/></li>
                    <li className={styles['sheraton']}>
                      <Image src="/images/logos/mono/Sheraton Hotel_1.png" alt="Sheraton mark" width={28} height={28} style={{display:'block'}}/>
                      <Image src="/images/logos/mono/Sheraton Hotel_2.png" alt="Sheraton" width={159} height={28} style={{display:'block'}}/>
                    </li>
                    <li><Image src="/images/logos/mono/choongang.png" alt="중앙유통단지" width={136} height={32} style={{display:'block'}}/></li>
                    <li><Image src="/images/logos/mono/skhynix.png" alt="SK hynix" width={61} height={32} style={{display:'block'}}/></li>
                    <li><Image src="/images/logos/mono/LG Chem.png" alt="LG Chem" width={145} height={32} style={{display:'block'}}/></li>
                    <li><Image src="/images/logos/mono/samsung.png" alt="Samsung" width={94} height={32} style={{display:'block'}}/></li>

                    {/* === 2세트(복제) === */}
                    <li><Image src="/images/logos/mono/CAZ-Logo.png" alt="" width={32} height={32} style={{display:'block'}}/></li>
                    <li><Image src="/images/logos/mono/CEYEON Technology.png" alt="" width={103} height={32} style={{display:'block'}}/></li>
                    <li><Image src="/images/logos/mono/DANKOOK UNIVERSTY.png" alt="" width={138} height={32} style={{display:'block'}}/></li>
                    <li className={styles['sheraton']}>
                      <Image src="/images/logos/mono/Sheraton Hotel_1.png" alt="" width={28} height={28} style={{display:'block'}}/>
                      <Image src="/images/logos/mono/Sheraton Hotel_2.png" alt="" width={159} height={28} style={{display:'block'}}/>
                    </li>
                    <li><Image src="/images/logos/mono/choongang.png" alt="" width={136} height={32} style={{display:'block'}}/></li>
                    <li><Image src="/images/logos/mono/skhynix.png" alt="" width={61} height={32} style={{display:'block'}}/></li>
                    <li><Image src="/images/logos/mono/LG Chem.png" alt="" width={145} height={32} style={{display:'block'}}/></li>
                    <li><Image src="/images/logos/mono/samsung.png" alt="" width={94} height={32} style={{display:'block'}}/></li>
                  </ul>
                </div>
            </div>
        </section>
    </div>
  );
}
