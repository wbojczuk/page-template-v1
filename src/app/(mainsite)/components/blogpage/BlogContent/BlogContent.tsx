import SocialShare from "../SocialShare/SocialShare"
import styles from "./blogcontent.module.css"
import BlogText from "./BlogText"

export default async function BlogContent({postData}: {postData: any}) {
    
  return (
    <section className={styles.wrapper}>
        <div className={styles.content}>
            <img src={postData.coverImage} alt="Cover Image" className={styles.coverImg} />
            <h1>{postData.title}</h1>
            <SocialShare title={postData.title} description={postData.description} />
            <h3>{postData.author?.name}, {new Date(`${postData.publishedAt}`).toDateString()}</h3>
            <BlogText content={postData.content} />
        </div>
    </section>
  )
}
