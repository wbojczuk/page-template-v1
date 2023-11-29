import styles from "./navbar.module.css"
import Link from "next/link"
import {forwardRef } from "react"

interface optionProps {
    ref: any,
    url: string,
    title: string
}

 const NavOption = forwardRef((props: optionProps, parentRef)=>{

  return (
    //@ts-ignore
    <Link ref={parentRef} href={props.url} className={styles.navLink}>
              <li>
                <span>{props.title}</span>
              </li>
            </Link>
  )
})

export default NavOption
