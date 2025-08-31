import styles from "@/styles/layout/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import LanguageDropdown from "../ui/LanguageDropdown";

export default function NavBar() {

    return (
        <div className={styles.wrap}>
            <div>
                <Link href="/">
                    <Image src="/images/2fc_logo_full.png" alt="2FC logo" width={140} height={52}></Image>
                </Link>
            </div>
            <nav>
                <ul className={styles['menu']}>
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
                <LanguageDropdown />
                <Link href="/contact">
                    <button className={styles['button']}>Contact</button>
                </Link>
            </div>
        </div>
    )
}