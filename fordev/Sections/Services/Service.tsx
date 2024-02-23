"use client"
import { serviceType } from "../../../../../globals"
import styles from "./services.module.css"
import Link from "next/link"

export default function Service(props: serviceType) {
  return (
    <Link href={(props.url !== undefined) ? props.url : "/contact"} className={styles.service}>
        <div className={styles.iconWrapper}>
            {props.icon}
        </div>
        <h5>{props.title}</h5>
        <p className={styles.serviceDescription}>{props.description}</p>

        <div className={styles.shader}></div>
        <div className={styles.imgWrapper}>
            <img className={styles.backgroundImage} src={props.backgroundImageUrl} alt={`Image of ${props.title}`} />
        </div>
    </Link>
  )
}
