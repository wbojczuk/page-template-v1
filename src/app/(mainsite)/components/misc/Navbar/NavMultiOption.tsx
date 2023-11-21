import styles from "./navbar.module.css"
import Link from "next/link"
import { useEffect, useRef, useState, useImperativeHandle, forwardRef } from "react"
import { InlineIcon } from "@iconify/react"

interface optionProps {
    ref: any,
    links: {url: string, title: string}[],
    iconifyIcon: string,
    title: string
}

 const NavMultiOption = forwardRef((props: optionProps, servicesRef)=>{

    const linkElems = props.links.map((data, i)=>{
        return (<Link key={i} href={data.url}><li>{data.title}</li></Link>)
    })

  return (
    //@ts-ignore
    <div ref={servicesRef} className={`${styles.dropdownLink} ${styles.navLink}`}>
              <li>
                <InlineIcon icon={props.iconifyIcon} width="50px" height="50px" />
                <span>{props.title}</span>
                <InlineIcon icon={"mdi:menu-down"} width="50px" height="50px" />
              </li>

              <ul>
                {linkElems}
              </ul>
            </div>
  )
})

export default NavMultiOption
