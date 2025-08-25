import styles from '@/styles/ui/techcard.module.css';
import Image from 'next/image';
import { JSX } from 'react';

type TechCardProps = {
    category: "FrontEnd" | "BackEnd" | "Database" | "Server";
    title: string;
};

const Icons: Record<TechCardProps["category"], JSX.Element> = {
  FrontEnd: (
    <svg viewBox="0 -960 960 960" fill="currentColor">
        <path d="M480-540ZM80-160v-80h400v80H80Zm120-120q-33 0-56.5-23.5T120-360v-360q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720H200v360h280v80H200Zm600 40v-320H640v320h160Zm-180 80q-25 0-42.5-17.5T560-220v-360q0-25 17.5-42.5T620-640h200q25 0 42.5 17.5T880-580v360q0 25-17.5 42.5T820-160H620Zm100-300q13 0 21.5-9t8.5-21q0-13-8.5-21.5T720-520q-12 0-21 8.5t-9 21.5q0 12 9 21t21 9Zm0 60Z"/>
    </svg>
  ),
  BackEnd: (
    <svg viewBox="0 -960 960 960" fill="currentColor">
        <path d="M80-680v-80q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v80h-80v-80H160v80H80Zm240 560v-80H160q-33 0-56.5-23.5T80-280v-80h80v80h640v-80h80v80q0 33-23.5 56.5T800-200H640v80H320Zm160-400Zm-288 0 104-104-56-56L80-520l160 160 56-56-104-104Zm576 0L664-416l56 56 160-160-160-160-56 56 104 104Z"/>
    </svg>
  ),
  Database: (
    <svg viewBox="0 -960 960 960" fill="currentColor">
        <path d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-479q89 0 179-25.5T760-679q-11-29-100.5-55T480-760q-91 0-178.5 25.5T200-679q14 30 101.5 55T480-599Zm0 199q42 0 81-4t74.5-11.5q35.5-7.5 67-18.5t57.5-25v-120q-26 14-57.5 25t-67 18.5Q600-528 561-524t-81 4q-42 0-82-4t-75.5-11.5Q287-543 256-554t-56-25v120q25 14 56 25t66.5 18.5Q358-408 398-404t82 4Zm0 200q46 0 93.5-7t87.5-18.5q40-11.5 67-26t32-29.5v-98q-26 14-57.5 25t-67 18.5Q600-328 561-324t-81 4q-42 0-82-4t-75.5-11.5Q287-343 256-354t-56-25v99q5 15 31.5 29t66.5 25.5q40 11.5 88 18.5t94 7Z"/>
    </svg>
  ),
  Server: (
    <svg viewBox="0 -960 960 960" fill="currentColor">
        <path d="M120-160v-160h720v160H120Zm80-40h80v-80h-80v80Zm-80-440v-160h720v160H120Zm80-40h80v-80h-80v80Zm-80 280v-160h720v160H120Zm80-40h80v-80h-80v80Z"/>
    </svg>
  )
};

// 카테고리별 이미지 매핑
const imageMap: Record<TechCardProps["category"], Record<string, string>> = {
  FrontEnd: {
    JavaScript: "/images/tech/color/javascript.png",
    React: "/images/tech/color/react.png",
    Vue: "/images/tech/color/vue.png",
  },
  BackEnd: {
    Java: "/images/tech/color/java.png",
    NET: "/images/tech/color/net.png",
    Spring: "/images/tech/color/spring.png",
  },
  Database: {
    MySQL: "/images/tech/color/mysql.png",
    PostgreSQL: "/images/tech/color/postgresql.png",
    Oracle: "/images/tech/color/oracle.png",
  },
  Server: {
    AWS: "/images/tech/color/aws.png",
    Linux: "/images/tech/color/linux.png",
    Redhat: "/images/tech/color/redhat.png",
  },
};

export default function TechCard({category, title}:TechCardProps) {

    const images = imageMap[category];

    return (
        <div className={styles['tech']}>
            <div className={styles['icon-box']}>
                <div className={styles['icon']}>
                    {Icons[category]}
                </div>
            </div>
            <div className={styles['title']}>
                {title}
            </div>
            <div className={styles['tech-box']}>
                {Object.entries(images).map(([name, src]) => (
                    <div key={name} className={styles["tech-image"]}>
                        <Image src={src} alt={name} fill className={styles["image"]}/>
                    </div>
                ))}
            </div>
        </div>
    );

}