import styles from "@/styles/layout/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import LanguageDropdown from "../ui/LanguageDropdown";
import { useLocale } from "next-intl";

function lhref(path: string, locale: string) {
  return `/${locale}${path === '/' ? '' : path}`;
}

export default function NavBar() {

    const locale = useLocale();

    return (
        <div className={styles.wrap}>
            <div>
                <Link href={lhref('/', locale)}>
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
                <Link href={lhref('/contact', locale)}>
                    <button className={styles['button']}>Contact</button>
                </Link>
                
            </div>
        </div>
    )
}