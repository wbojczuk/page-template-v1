import Link from 'next/link';
import styles from './needhelp.module.css';

export default function NeedHelp(){
return (
 <div className={styles.needHelp}>
    <div className={styles.text}>Need Help? Get Your Project Started <span className="underline">Today!</span></div>

    <Link href={"/contact"} className={`${styles.button} main-link`}>Contact Us Now</Link>
 </div>
)};