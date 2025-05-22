import Link from "next/link"
import styles from "./pagetitle.module.css"

export default function PageTitle(props: {title: string, subtitle: string, noButton?: boolean}) {
  return (
    <header className={styles.pageTitle}>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <div className={`center ${styles.linkWrapper}`}>
          {(!(props.noButton)) && <Link className="main-link" href="/contact">Donate</Link>}
        </div>

        <img src="/img/page-title-bg.webp" className="bg-img" aria-hidden />
        <div style={{backgroundColor: "rgba(64,18,72,0.81)"}} className="shader"></div>
    </header>
  )
}
