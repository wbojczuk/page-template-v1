"use client"

import styles from "./footer.module.css"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <aside>
        <h1>Company Name</h1>
        <h2>Address, <br />
If Any</h2>
      </aside>

        <aside>
          <h3>Quick Links</h3>
          <ul className={styles.link}>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
          </ul>
        </aside>

        <aside>
          <h3>Categories</h3>
          <ul className={styles.link}>
            <a href="#" target="_blank">Category</a>
            <a href="#" target="_blank">Category</a>
            <a href="#" target="_blank">Category</a>
          </ul>
        </aside>
    </footer>
  )
}
