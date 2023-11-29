"use client"

import styles from "./navbar.module.css"
import Link from "next/link"
import { useEffect, useRef } from "react"


export default function Navbar() {

  const navLinksRef: any = useRef()
  const isMenuOpen: any = useRef()
  const hamburgerMenuRef: any = useRef()
  isMenuOpen.current = false

  function toggleMenu(){
    if(!isMenuOpen.current){
      isMenuOpen.current = true
      navLinksRef.current.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
      hamburgerMenuRef.current.style.scale = "0.8"
    }else{
      isMenuOpen.current = false
      hamburgerMenuRef.current.style.scale = "1"
      navLinksRef.current.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)"
      
    }
  }

  useEffect(()=>{

    window.addEventListener("click", (evt)=>{
      // @ts-ignore
      const currentID = evt.target.id || "";
      if((isMenuOpen.current == true) && (currentID !== "hamburgerMenu")&& (currentID !== "navLinksMenu")){
        toggleMenu()
      }
    })

  }, [])

  return (
    <nav className={styles.mainNav}>
        <div className={styles.topbar}>
          <span className={styles.topbarHeadline}>Temp text displayed here!</span>

          <div className={styles.contactInfo}>
            <a  href="tel:000000000" className={`${styles.phoneContact} ${styles.topbarLink}`}>
              <img src="./icons/phone-rounded.svg" aria-hidden={true} />
              <span>(000) 000-000</span>
            </a>

            <a className={styles.topbarLink} href="https://facebook.com" target="_blank">
              <img src="./icons/facebook-rounded.svg" aria-hidden={true} />
            </a>

            <a target="_blank" className={styles.topbarLink} href="mailto:example@email.com">
              <img src="./icons/email-rounded.svg" aria-hidden={true} />
            </a>
          </div>
        </div>

        <div className={styles.mainContent}>

          <Link href="/" className={styles.logo}>
            <img src="./img/logo.png" alt="Main Logo" className={styles.logoImg} />
            <span>Temp title</span>
          </Link>
          <div className={styles.navLinks}>
            
            <menu ref={navLinksRef} id="navLinksMenu">
            <li><Link href="/">Home</Link></li>
              <li className={styles.seperator}>&bull;</li>

              <li><Link href="/contact">Contact</Link></li>
              <li className={styles.seperator}>&bull;</li>

              <li><Link href="/about">About</Link></li>
              <li className={styles.seperator}>&bull;</li>
              
              <li><Link href="/#templink">FAQ</Link></li>
            </menu>
            <div className={styles.getStartedWrapper}>
              <Link href="/contact" className={styles.getStartedButton}>Contact us</Link>
              <button ref={hamburgerMenuRef} id="hamburgerMenu" onClick={toggleMenu} className={styles.hamburgerMenu}></button>
            </div>
          </div>

        </div>
    </nav>
  )
}
