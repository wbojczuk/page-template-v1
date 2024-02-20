import styles from "./allblogs.module.css"
import BlogCard from "../BlogCard/BlogCard";
import getBlogs from "@/app/controllers/getBlogs";

export default async function AllBlogs() {
    const blogs = getBlogs()

    const blogElems = blogs.map((data, i)=>{
      return <BlogCard key={i} {...data} />
    })

    return(
      <>
        <div className={styles.bannerWrapper}>
          <h1 className={styles.bannerTitle}>Blog</h1>
          <img src="./img/blog-banner.png" alt="blog banner" className={styles.banner} />
        </div>
        <section className={styles.blogWrapper}>
          {blogElems}
        </section>
      </>
    )
}
