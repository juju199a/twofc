import styles from '@/styles/ui/frameworkcard.module.css';
import { JSX } from 'react';

type FrameworkCardProps = {
    category: "Speed" | "CostSaving" | "Integration" | "Component" | "Operations";
    title: string;
    description: string;
};

const Icons: Record<FrameworkCardProps["category"], JSX.Element> = {
  Speed: (
    <svg viewBox="0 -960 960 960" fill="currentColor">
        <path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"/>
    </svg>
  ),
  CostSaving: (
    <svg viewBox="0 -960 960 960" fill="currentColor">
        <path d="M520-120v-80h184L520-384v-112l240 240v-184h80v320H520ZM240-280v-40H120v-80h240v-120H200q-33 0-56.5-23.5T120-600v-120q0-33 23.5-56.5T200-800h40v-40h80v40h120v80H200v120h160q33 0 56.5 23.5T440-520v120q0 33-23.5 56.5T360-320h-40v40h-80Z"/>
    </svg>
  ),
  Integration: (
    <svg viewBox="0 -960 960 960" fill="currentColor">
        <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/>
    </svg>
  ),
  Component: (
    <svg viewBox="0 -960 960 960" fill="currentColor">
        <path d="M352-120H200q-33 0-56.5-23.5T120-200v-152q48 0 84-30.5t36-77.5q0-47-36-77.5T120-568v-152q0-33 23.5-56.5T200-800h160q0-42 29-71t71-29q42 0 71 29t29 71h160q33 0 56.5 23.5T800-720v160q42 0 71 29t29 71q0 42-29 71t-71 29v160q0 33-23.5 56.5T720-120H568q0-50-31.5-85T460-240q-45 0-76.5 35T352-120Zm-152-80h85q24-66 77-93t98-27q45 0 98 27t77 93h85v-240h80q8 0 14-6t6-14q0-8-6-14t-14-6h-80v-240H480v-80q0-8-6-14t-14-6q-8 0-14 6t-6 14v80H200v88q54 20 87 67t33 105q0 57-33 104t-87 68v88Zm260-260Z"/>
    </svg>
  ),
  Operations: (
    <svg  viewBox="0 -960 960 960" fill="currentColor">
        <path d="M756-120 537-339l84-84 219 219-84 84Zm-552 0-84-84 276-276-68-68-28 28-51-51v82l-28 28-121-121 28-28h82l-50-50 142-142q20-20 43-29t47-9q24 0 47 9t43 29l-92 92 50 50-28 28 68 68 90-90q-4-11-6.5-23t-2.5-24q0-59 40.5-99.5T701-841q15 0 28.5 3t27.5 9l-99 99 72 72 99-99q7 14 9.5 27.5T841-701q0 59-40.5 99.5T701-561q-12 0-24-2t-23-7L204-120Z"/>
    </svg>
  )
};
export default function FrameworkCard({category, title, description}: FrameworkCardProps) {

    return (
        <div className={styles['framework']}>
            <div className={styles['container']}>
                <div className={styles['title-box']}>
                    <div className={styles['icon']}>
                         {Icons[category]}
                    </div>
                    <div className={styles['title']}>
                        {title}
                    </div>
                </div>
                <div className={`${styles['description']} ${styles['multilang-text']}`}>
                    {description}
                </div>
            </div>
            <div className={styles['footer']}>
            </div>
        </div>
    );
}