"use client"

import "./hamburgers.min.css"
import styles from "./navbar.module.css"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { InlineIcon } from "@iconify/react"
import Image from "next/image"
import NavMultiOption from "./NavMultiOption"
import NavOption from "./NavOption"


export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [isOnMobile, setIsOnMobile] = useState(false)


  // ****************** Add NAV OPTION REFS HERE ******************

  const servicesRef: any = useRef()
  const homeRef: any = useRef()
  const aboutRef: any = useRef()
  const contactRef: any = useRef()
  const reviewsRef: any = useRef()

  const hamburgerRef: any = useRef()
  const contentRef: any = useRef()
  const content2Ref: any = useRef()

  // ****************** Add Current Page Triggers HERE ******************

  const currentPageTriggers = [
    {
      triggers: ["/about"],
      ref: aboutRef
    },
    {
      triggers: ["/services"],
      ref: servicesRef
    },
    {
      triggers: ["/contact"],
      ref: contactRef
    },
    {
      triggers: ["/reviews"],
      ref: reviewsRef
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
    setIsOnMobile(window.matchMedia("(max-width: 649px)").matches)

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
  
  const hamburgerClass = "hamburger--collapse"
  /* Here’s the list of hamburger-type classes you can choose from:

        hamburger--3dx
        hamburger--3dx-r
        hamburger--3dy
        hamburger--3dy-r
        hamburger--3dxy
        hamburger--3dxy-r
        hamburger--arrow
        hamburger--arrow-r
        hamburger--arrowalt
        hamburger--arrowalt-r
        hamburger--arrowturn
        hamburger--arrowturn-r
        hamburger--boring
        hamburger--collapse
        hamburger--collapse-r
        hamburger--elastic
        hamburger--elastic-r
        hamburger--emphatic
        hamburger--emphatic-r
        hamburger--minus
        hamburger--slider
        hamburger--slider-r
        hamburger--spin
        hamburger--spin-r
        hamburger--spring
        hamburger--spring-r
        hamburger--stand
        hamburger--stand-r
        hamburger--squeeze
        hamburger--vortex
        hamburger--vortex-r */


  return (
    <nav className={styles.mainNav}>

      <Link href="/" className={styles.logo}>
        <Image src="/img/logo.png" className={styles.logoImg} width={500} height={250} alt="Logo" />
        <span>Rome Digital</span>
      </Link>

        

     
        
      <div className={styles.contentWrapper}>
      <button id="hamburgerMenu" onClick={toggleMenu} ref={hamburgerRef} className={`hamburger ${hamburgerClass} mobile tablet nav-noclose`} type="button">
        <span className="hamburger-box" style={{pointerEvents: "none"}}>
          <span className="hamburger-inner" style={{pointerEvents: "none"}}></span>
        </span>
      </button>
        <div ref={content2Ref} className={styles.content}>
          <ul ref={contentRef} className={styles.links}>

{/******************  PUT NAV OPTIONS HERE  ************************/}

          <NavOption
          title="Home"
          url="/"
          icon={<InlineIcon icon="mdi:home" width="50px" height="50px" />}
          ref={homeRef}
          />
    
          <NavMultiOption
          title="Services"
          ref={servicesRef}
          links={[
            {title: "Driveway Cleaning", url: "/services"},
            {title: "Roof Cleaning", url: "/"},
            {title: "House Cleaning", url: "/"},
          ]}
          icon={<InlineIcon icon="mdi:tools" width="50px" height="50px" />}
          />

          <NavOption
          title="About Us"
          url="/about"
          icon={<InlineIcon icon="mdi:information" width="50px" height="50px" />}
          ref={aboutRef}
          />

          <NavOption
          title="Reviews"
          url="/reviews"
          icon={<InlineIcon icon="mdi:account" width="50px" height="50px" />}
          ref={reviewsRef}
          />

          <NavOption
          title="Contact"
          url="/contact"
          icon={<InlineIcon icon="mdi:email" width="50px" height="50px" />}
          ref={contactRef}
          />

          
          <a href="tel:0000000000" className={styles.cta}>
            <InlineIcon icon={"mdi:phone"} width="50px" height="50px" />
            <span>{(isOnMobile) ? "Tap To Call Us" : "CALL US (000) 000-0000"}</span>
          </a>
          

          </ul>

          {/* ******* PUT SHOPIFY CART HERE ******** */}

        </div>
        
        </div>
    </nav>
  )
}
