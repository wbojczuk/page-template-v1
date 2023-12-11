"use client"
import { InlineIcon } from "@iconify/react"
import styles from "./section1.module.css"
import Image from "next/image"

export default function FeaturedService(props: {imgSrc: string}) {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <Image className={styles.img} src={props.imgSrc} width={360} height={600} alt="Featured Service Image" />
        </div>
        

        <div className={styles.content}>
            <h4>Featured Service</h4>
            <h2>Example Service For Rome, Georgia</h2>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem suscipit, nam aliquid vero tenetur doloribus quas distinctio maxime doloremque et. Consequatur, odio velit ipsam quod placeat accusamus mollitia optio laudantium?
            <br /><br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, nihil. Sit, animi similique voluptatibus corporis saepe aliquam accusantium autem sunt quasi ut pariatur, eum dolorum soluta ad obcaecati, asperiores et.
            </p>
            <a className="main-button">GET AN APPOINTMENT  <InlineIcon icon="gg:arrow-right"/></a>
        </div>
    </section>
  )
}
