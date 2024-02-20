import type { Metadata } from "next"
import styles from "./blog.module.css"
import AllBlogs from "@/app/(mainsite)/components/blogpage/AllBlogs/AllBlogs"

export const metadata: Metadata = {
    title: "Blog | Rome Digital Web Design",
    description: "Let's get started on building your digital empire through websites by Rome Digital"
}

export default function BlogPage(){
    return(
        <main className={styles.main}>
            <AllBlogs />
        </main>
    )
}