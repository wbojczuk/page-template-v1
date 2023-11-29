"use client"

import "./hamburgers.min.css"
import styles from "./navbar.module.css"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { InlineIcon } from "@iconify/react"
import NavOption from "./NavOption"


export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);


  // ****************** Add NAV OPTION REFS HERE ******************

  const homeRef: any = useRef()
  const programRef: any = useRef()
  const contactRef: any = useRef()
  const staffRef: any = useRef()

  const hamburgerRef: any = useRef()
  const contentRef: any = useRef()

  // ****************** Add Current Page Triggers HERE ******************

  const currentPageTriggers = [
    {
      triggers: ["/staff"],
      ref: staffRef
    },
    {
      triggers: ["/contact"],
      ref: contactRef
    },
    {
      triggers: ["/program"],
      ref: programRef
    },
    {
      triggers: ["/", "/home"],
      ref: homeRef
    }
    
  ]

  const pathname = usePathname()

  useEffect(()=>{
    currentPageTriggers.forEach((data)=>{
      if(data.triggers.includes(pathname)){
        data.ref.current.classList.add(styles.active)
      }else{
        data.ref.current.classList.remove(styles.active)
      }
    })
  }, [pathname])


  useEffect(()=>{
    const isOnTouch = window.matchMedia("(max-width: 990px)").matches

    if(isOnTouch){
      window.addEventListener("click", (evt)=>{
        //@ts-ignore
        if(!(evt.target.classList.contains("nav-noclose"))){
          closeMenu()
        }
      })
    }
  }, [])


  function toggleMenu(){
    if(menuOpen){
     closeMenu()
    }else{
     openMenu()
    }
  }

  function closeMenu(){
    setMenuOpen(false)
    hamburgerRef.current.classList.remove("is-active")
    contentRef.current.style.transform =  "scaleX(0)"
  }

  function openMenu(){
    setMenuOpen(true)
    hamburgerRef.current.classList.add("is-active")
    contentRef.current.style.transform =  "scaleX(1)"
  }


  return (
    <nav className={styles.mainNav}>

      <Link href="/" className={styles.logo}>
        <div className={styles.logoImg}> </div>
        <span>Cartersville Outreach Men’s Center</span>
      </Link>

      <button id="hamburgerMenu" onClick={toggleMenu} ref={hamburgerRef} className="hamburger hamburger--spin mobile tablet nav-noclose" type="button">
        <span className="hamburger-box" style={{pointerEvents: "none"}}>
          <span className="hamburger-inner" style={{pointerEvents: "none"}}></span>
        </span>
      </button>
        

        <div ref={contentRef} className={styles.content}>
          <ul className={styles.links}>

{/******************  PUT NAV OPTIONS HERE  ************************/}

          <NavOption
          title="Home"
          url="/"
          ref={homeRef}
          />

          <NavOption
          title="Program"
          url="/program"
          ref={programRef}
          />

          <NavOption
          title="Contact"
          url="/contact"
          ref={contactRef}
          />
          <NavOption
          title="Staff"
          url="/staff"
          ref={staffRef}
          />

          <a target="_blank" href="https://paypal.com" className={styles.cta}>
            <InlineIcon icon={"mdi:heart"} width="50px" height="50px" />
            <span>Donate</span>
          </a>

          </ul>
        </div>
    </nav>
  )
}
