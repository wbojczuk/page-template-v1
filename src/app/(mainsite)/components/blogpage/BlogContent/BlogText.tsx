"use client"
//@ts-ignore
import "@/app/vendor/prism.js"
import { useEffect } from "react"
import styles from "./blogcontent.module.css"
export default function BlogText(props: {content: any}){

    useEffect(()=>{
        //@ts-ignore
        Prism.highlightAll();
    }, [])

    return(
        <div className={styles.blogContent} dangerouslySetInnerHTML={{__html: props.content}}></div>
    )
}