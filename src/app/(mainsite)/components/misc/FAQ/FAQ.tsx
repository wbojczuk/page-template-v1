import Link from "next/link"
import styles from "./faq.module.css"
import FAQItem from "./FAQItem"
import faqData from "@/app/(mainsite)/data/faqData"
import Shader from "../Shader/Shader"

export default function FAQ() {
    const faqElems = faqData.map((data, i)=>{
        return <FAQItem {...data} key={i} />
    })
  return (
    <section className={`${styles.section}`}>

       <div className={styles.faqWrapper}>
        
         {faqElems}
          <Link className={`main-link ${styles.mobileShow}`} href={"/contact"}>Contact Us</Link>
       </div>

       <div className={styles.imgWrapper}>
        <h3 id="faqHeading" className="small-heading">Frequently Asked <span className="highlight-gradient">Questions</span></h3>
          <div className={styles.imgContainer}>
            <img src="/img/faq.webp" alt="iamge of truk" />

              <div className={styles.imgStyle1}></div>
              <div className={styles.imgStyle2}></div>

              <div className={styles.imgText}>We Will Respond Fast To Any Questions!</div>
          </div>
          <Link className={`main-link ${styles.mobileHide}`} href={"/contact"}>Contact Us</Link>

       </div>
      
        <img src='/img/faq.webp' alt='Image of truck' className='bg-img' />
        <Shader background="white" opacity={0.9} />
    </section>
  )
}
