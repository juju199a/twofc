import styles from '@/styles/sections/hero.module.css';
import Image from "next/image";

export default function Hero() {

  return (
    <div className={styles['hero']}>
        <section className={styles['hero-section']} >
            <div className={styles['hero-container']}>
                <div className={styles['hero-container-left']}>
                    <h1>
                      2FC will put wings on your company.
                    </h1>
                    <h2>
                      투에프씨는 귀하의 회사에 날개(IT)를 달아드리겠습니다.
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
                <div className={styles['hero-container-right']}>
                    <Image src="/images/hero1.png" alt="hero1" className={styles['hero1']} width={705} height={569}></Image>
                    <Image src="/images/hero2.png" alt="hero2" className={styles['hero2']} width={627} height={533}></Image>
                </div>
            </div>
            <div className={styles['hero-banner-container']}>
                <div className={styles['heading']}>2FC는 10개의 고객사와 100건의 프로젝트를 완료하였습니다.</div>
                <div className={styles['clients']}>
                    <Image src="/images/logos/mono/CAZ-Logo.png" alt="hero1" width={32} height={32}></Image>
                    <Image src="/images/logos/mono/CEYEON Technology.png" alt="hero1" width={103} height={32}></Image>
                    <Image src="/images/logos/mono/DANKOOK UNIVERSTY.png" alt="hero1" width={138} height={32}></Image>
                    <div>
                      <Image src="/images/logos/mono/Sheraton Hotel_1.png" alt="hero1" width={28} height={28}></Image>
                      <Image src="/images/logos/mono/Sheraton Hotel_2.png" alt="hero1" width={159} height={28}></Image>
                    </div>
                    <Image src="/images/logos/mono/choongang.png" alt="hero1" width={136} height={32}></Image>
                    <Image src="/images/logos/mono/skhynix.png" alt="hero1" width={61} height={32}></Image>
                    <Image src="/images/logos/mono/LG Chem.png" alt="hero1" width={145} height={32}></Image>
                    <Image src="/images/logos/mono/samsung.png" alt="hero1" width={94} height={32}></Image>
                </div>
            </div>
        </section>
    </div>
  );
}
