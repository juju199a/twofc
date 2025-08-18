import styles from "@/styles/layout/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import LangageToggle from "../ui/LanguageToggle";

export default function NavBar() {


    return (
        <div className={styles.wrap}>
            <div>
                <Image src="/images/2fc_logo.svg" alt="2FC logo" width={160} height={59}></Image>
            </div>
            <nav>
                <ul className={styles.menu}>
                    <li>
                        <Link href="/service">IT Service</Link>
                    </li>
                    <li>
                        <Link href="/solutions">Solutions</Link>
                    </li>
                    <li>
                        <Link href="/devices">Devices</Link>
                    </li>
                </ul>
            </nav>
            <div className={styles['button-box']}>
                <LangageToggle />
                <button className={styles['button']}>Contact</button>
            </div>
        </div>
    )
}