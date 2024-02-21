import styles from "./navbar.module.css"
import Link from "next/link"
import { useEffect, useRef, useState, useImperativeHandle, forwardRef } from "react"
import { InlineIcon } from "@iconify/react"

interface optionProps {
    ref: any,
    url: string
    iconifyIcon?: string,
    title: string
}

 const NavOption = forwardRef((props: optionProps, parentRef)=>{

  return (
    //@ts-ignore
    <Link ref={parentRef} href={props.url} className={styles.navLink}>
              <li>
                {(props.iconifyIcon !== undefined) ? <InlineIcon icon={props.iconifyIcon} width="50px" height="50px" /> : <span className={styles.noIcon}></span>}
                <span>{props.title}</span>
              </li>
            </Link>
  )
})

export default NavOption
