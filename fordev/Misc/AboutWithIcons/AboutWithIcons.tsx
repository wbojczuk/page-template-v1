"use client"
import { CSSProperties } from "react"
import styles from "./aboutwithicons.module.css"
import Link from "next/link"
import Shader from "../../misc/Shader/Shader"

export default function AboutWithIcons() {

  const icon = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><defs><mask id="ipSCheckOne0"><g fill="none" stroke-linejoin="round" stroke-width="4"><path fill="#fff" stroke="#fff" d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z"/><path stroke="#000" stroke-linecap="round" d="m16 24l6 6l12-12"/></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCheckOne0)"/></svg>

  const text = ["Fast Response", "Honest Pricing","Safe Treatments","Licensed Experts","Pest-Free Guarantee","Family Friendly","30+ Years Experience","Local & Reliable",]

  const iconElems = text.map((text, i)=>{
    return(<div key={i} className={styles.icon}>{icon} {text}</div>)
  })

  //@ts-check
  const cssProps = {"--width": "90%"} as CSSProperties
  return (
    <section className={styles.aboutUs}>
        <div className={styles.textWrapper}>
          <h4>About Us</h4>
            <h1>About Alert Termite<br /> <span className="underline">and Pest</span> CONTROL</h1>

            <p>With over 30 years of experience, Alert Termite and Pest CO. delivers trusted pest control services for homes and businesses. We handle everything from general pests to termites and critters with fair, honest, and professional care. Our mission is simple: to protect your property with safe, effective solutions and the reliability you deserve.</p>

            <div className={styles.icons}>
              {iconElems}
            </div>

            <Link className="main-link" href="/contact">Get a Quote</Link>
        </div>


        <div className={styles.imgWrapper}>
          <div className={styles.imgContainer}>
            <img src="/img/faq.webp" alt="image of a dead roach" className={styles.mainImg} />
            <Shader background="var(--primary-color)" opacity={.51} zIndex={100}/>
            {/* <div className={styles.imgStyle}></div> */}
          </div>
        </div>
    </section>
  )
}
