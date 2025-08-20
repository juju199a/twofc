import styles from '@/styles/ui/conceptcard.module.css';
import { JSX } from 'react';

type ConceptCardProps = {
    category: "ITService" | "Solutions" | "Devices";
    title: string;
    description: string;
    summaries: string[];   // 문자열로만 지정
};

const Icons: Record<ConceptCardProps["category"], JSX.Element> = {
  ITService: (
    <svg viewBox="0 -960 960 960" fill="currentColor">
        <path d="m437-398 227-226-57-57-170 170-85-85-56 56 141 142ZM40-120v-80h880v80H40Zm120-120q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Zm0-80h640v-440H160v440Zm0 0v-440 440Z"/>
    </svg>
  ),
  Solutions: (
    <svg viewBox="0 -960 960 960" fill="currentColor">
        <path d="M480-80q-26 0-47-12.5T400-126q-33 0-56.5-23.5T320-206v-142q-59-39-94.5-103T190-590q0-121 84.5-205.5T480-880q121 0 205.5 84.5T770-590q0 77-35.5 140T640-348v142q0 33-23.5 56.5T560-126q-12 21-33 33.5T480-80Zm-80-126h160v-36H400v36Zm0-76h160v-38H400v38Zm-8-118h58v-108l-88-88 42-42 76 76 76-76 42 42-88 88v108h58q54-26 88-76.5T690-590q0-88-61-149t-149-61q-88 0-149 61t-61 149q0 63 34 113.5t88 76.5Zm88-162Zm0-38Z"/>
    </svg>
  ),
  Devices: (
    <svg viewBox="0 -960 960 960" fill="currentColor">
        <path d="M480-540ZM80-160v-80h400v80H80Zm120-120q-33 0-56.5-23.5T120-360v-360q0-33 23.5-56.5T200-800h560q33 0 56.5 23.5T840-720H200v360h280v80H200Zm600 40v-320H640v320h160Zm-180 80q-25 0-42.5-17.5T560-220v-360q0-25 17.5-42.5T620-640h200q25 0 42.5 17.5T880-580v360q0 25-17.5 42.5T820-160H620Zm100-300q13 0 21.5-9t8.5-21q0-13-8.5-21.5T720-520q-12 0-21 8.5t-9 21.5q0 12 9 21t21 9Zm0 60Z"/>
    </svg>
  )
};

export default function ConceptCard({category, title, description, summaries}: ConceptCardProps) {

    return (
        <div className={styles['card']}>
            <div className={styles['container']}>
                <div className={styles['title-box']}>
                    <div className={styles['icon']}>
                        {Icons[category]}
                    </div>
                    <div className={styles['title']}>{title}</div>
                    <div className={`${styles['description']} ${styles['multilang-text']}`}>{description}</div>
                </div>
                <div className={styles['summary-list']}>
                    {summaries.map((item, index) => (
                        <div key={index} className={styles['summary-item']}>
                            <div className={styles['icon']}>
                                <svg viewBox="0 -960 960 960" fill="currentColor"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
                            </div>
                            <div className={styles['text']}>{item}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles['footer']}>
                <button>Learn more</button>
            </div>
        </div>

    );
}