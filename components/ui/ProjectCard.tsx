import styles from '@/styles/ui/projectcard.module.css';

type ProjectCardProps = {
    category: string;
    title: string;
    subtitle: string;
    description: string;
};

const images = {
    "HaruFilm": "/images/logos/color/HaruFilm.png",
    "CAZ": "/images/logos/color/CAZ.png",
    "2FCFlyOffice": "/images/logos/color/2FC.png",
    "SamsungKiheung":"/images/logos/color/samsung.png",
    "LGEngergy": "/images/logos/color/LG.png",
    "SKHynics": "/images/logos/color/skhynix.png"
}

export default function ProjectCard({category, title, subtitle, description}: ProjectCardProps) {

    return (
        <div className={styles['card']}>
            <div className={styles['card-header']}>
                <img src={images[category]} className={styles['image']}/>
                 <div className={styles['icon']}>
                    <svg viewBox="0 -960 960 960" fill="currentColor">
                        <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/>
                    </svg>
                </div>
            </div>
            <div className={styles['container']}>
                <div className={styles['title-box']}>
                    <div className={styles['title']}>{title}</div>
                    <div className={styles['subtitle']}>{subtitle}</div>
                </div>
                <div className={styles['description']}>
                    {description}
                </div>
            </div>
        </div>
    );
}