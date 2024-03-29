"use client"
import styles from "./featuredservice.module.css"

export default function FeaturedService() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src="/img/placeholder-vertical.png" width={360} height={600} alt="Featured Service Image" />
        </div>
        

        <div className={styles.content}>
            <h4>Featured Service</h4>
            <h2>Example Service For Rome, Georgia</h2>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem suscipit, nam aliquid vero tenetur doloribus quas distinctio maxime doloremque et. Consequatur, odio velit ipsam quod placeat accusamus mollitia optio laudantium?
            <br /><br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, nihil. Sit, animi similique voluptatibus corporis saepe aliquam accusantium autem sunt quasi ut pariatur, eum dolorum soluta ad obcaecati, asperiores et.
            </p>
            <a className="main-link">GET AN APPOINTMENT</a>
        </div>
    </section>
  )
}
