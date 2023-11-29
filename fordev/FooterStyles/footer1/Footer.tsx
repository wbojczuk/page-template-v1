"use client"

import styles from "./footer.module.css"
import Link from "next/link"
import Image from "next/image"
import { InlineIcon } from "@iconify/react"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>

        <Image src="/img/logo.png" width={512} height={512} className={styles.logo} alt="Main Logo"/>

        <div className={styles.links}>
          <aside>
              <h3 className={styles.listTitle}>Quick Links</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <Link href="/">Home</Link>
                </li>
                <li className={styles.listItem}>
                  <Link href="/about">About</Link>
                </li>
                <li className={styles.listItem}>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </aside>

            <aside>
              <h3 className={styles.listTitle}>Categories</h3>
              <ul className={styles.list}>
                <span className={styles.listItem}>Category</span>
                <span className={styles.listItem}>Category</span>
                <span className={styles.listItem}>Category</span>
              </ul>
            </aside>

            <aside>
              <h3 className={styles.listTitle}>Contact</h3>
              <ul className={styles.list}>
                <aside className={`${styles.contactItem} ${styles.listItem}`}>
                <InlineIcon icon={"mdi:phone"} width="50px" height="50px" />
                  <a href="tel:0000000000" target="_blank">(000) 000-0000</a>
                </aside>
                
                <aside className={`${styles.contactItem} ${styles.listItem}`}>
                <InlineIcon icon={"mdi:email"} width="50px" height="50px" />
                  <a href="mailto:example@gmail.com" target="_blank">example@gmail.com</a>
                </aside>
                
                <aside className={`${styles.contactItem} ${styles.listItem}`}>
                <InlineIcon icon={"mdi:map-marker"} width="50px" height="50px" />
                  <a href="https://google.com" target="_blank">Rome, Georgia</a>
                </aside>
              </ul>
            </aside>
          </div>

      </div>

      <div className={styles.copyright}>© Copyright 2023 to Present - <a href="https://www.romedigital.co" target="_blank">Rome Digital</a></div>
        
       
    </footer>
  )
}
