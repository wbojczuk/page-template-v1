"use client"
import Link from "next/link"
import styles from "./reviews.module.css"
import { InlineIcon } from "@iconify/react"
import reviewData from "@/app/(mainsite)/data/reviewData"
import Review from "./Review"

export default function Reviews() {

    const reviewElems = reviewData.map((data, i)=>{
        return <Review {...data} key={i} />
    })

  return (
    <section className={styles.section}>
        <div className={styles.reviewsWrapper}>
            {reviewElems}
        </div>
        <div className="center">
        <Link href="/contact" className="main-button">Get Started!  <InlineIcon icon="gg:arrow-right"/></Link>
        </div>
    </section>
  )
}
