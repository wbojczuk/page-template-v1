"use client"
import { useEffect, useRef } from "react"
import styles from "./faq.module.css"
import gsap from "gsap"

export default function FAQItem(props: faqType) {

    const isOpen: any = useRef()
    isOpen.current = false;

    const caretRef: any = useRef()
    const answerRef: any = useRef()
    const timelineRef: any = useRef()
    const questionRef: any = useRef()

    useEffect(()=>{
        timelineRef.current = gsap.timeline({defaults:{
            ease: "power1.inOut",
            duration: 0.3
        }})

        gsap.set(caretRef.current,{
            rotate: "0deg"
        })
        gsap.set(answerRef.current, {
            height: 0
        })
        gsap.set(caretRef.current, {
            color: "black"
        })

        timelineRef.current.to(answerRef.current, {
            height: "auto"
        }).to(caretRef.current,{
            rotate: "-180deg"
        }, "<").to(caretRef.current, {
            color: "var(--primary-color)"
        }, "<")
        timelineRef.current.pause()


    }, [])

    function toggleAnswer(){
        if(isOpen.current){
            timelineRef.current.reverse()
        }else{
            timelineRef.current.play()
        }
        isOpen.current = !isOpen.current;
    }

  return (
    <div className={styles.faqItem}>
        <div className={styles.headingContent} onClick={toggleAnswer}>
            <span ref={questionRef}>{props.question}</span>
            <svg ref={caretRef} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M4.47 9.4a.75.75 0 0 1 1.06 0l6.364 6.364a.25.25 0 0 0 .354 0L18.612 9.4a.75.75 0 0 1 1.06 1.06l-6.364 6.364a1.75 1.75 0 0 1-2.475 0L4.47 10.46a.75.75 0 0 1 0-1.06" clipRule="evenodd"></path></svg>
        </div>
        <div ref={answerRef} className={styles.faqItemAnswer}>
            <p>{props.answer}</p>
        </div>
        
    </div>
  )
}
