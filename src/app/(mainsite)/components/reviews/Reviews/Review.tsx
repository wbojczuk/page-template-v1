"use client"
import { InlineIcon } from "@iconify/react"
import styles from "./reviews.module.css"

export default function Review(props: reviewType) {
  return (
    <aside className={styles.review}>
        <div className={styles.iconWrapper}><InlineIcon icon="lucide:quote" /></div>

        <h3>{props.title}</h3>

        <p>{props.desc}</p>

        <span>- {props.name} - {props.role}</span>
    </aside>
  )
}
