"use client"

import {servicesModuleType } from "../../../../../globals"
import styles from "./services.module.css"
import Service from "./Service"
import Link from "next/link"

export default function Services(props: servicesModuleType) {
    const serviceElems = props.services.map((service, i)=>{
        return <Service {...service} key={i} />
    })
  return (
    <section className={styles.services}>
            <h4>Our Services</h4>
            <h2>Commercial and Residential Landscaping Services</h2>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, eum. Quasi natus quas animi saepe, harum deleniti officiis unde perspiciatis quo vel vitae nulla soluta molestias odio quis! Ipsam, ut. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam consequatur ea nihil itaque. Accusamus similique itaque officia vero autem debitis eligendi nemo ut quisquam quo cumque, sequi iusto. Blanditiis, reiciendis!</p>

            <div className={styles.servicesWrapper}>
                {serviceElems}
            </div>
            <div className={`center ${styles.ctaWrapper}`}>
                <Link href={"/contact"} className="main-button">Get a free quote!  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m15.038 6.343l-1.411 1.418l3.27 3.255l-13.605.013l.002 2l13.568-.013l-3.215 3.23l1.417 1.41l5.644-5.67z"></path></svg></Link>
            </div>
    </section>
  )
}
