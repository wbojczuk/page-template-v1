"use client"
import { ReactNode, useEffect, useRef } from "react"
import styles from "./infiniteribbon.module.css"

export default function InfiniteRibbon(props: {content: ReactNode}) {

  const time = 10

  const div1Ref: any = useRef()
  const div2Ref: any = useRef()

  useEffect(()=>{
   
  }, [])
  return (
    <div className={styles.infiniteRibbon}>
        <div className={styles.infiniteRibbonInner}>
          <div ref={div1Ref}>
            {props.content}
          </div>
          <div ref={div2Ref}>
            {props.content}
          </div>
          <div ref={div2Ref}>
            {props.content}
          </div>
        </div>
    </div>
  )
}
