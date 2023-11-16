import styles from "./faq.module.css"
import FAQItem from "./FAQItem"
import faqData from "@/app/(mainsite)/data/faqData"

export default function FAQ() {
    const faqElems = faqData.map((data, i)=>{
        return <FAQItem {...data} key={i} />
    })
  return (
    <section className={`${styles.section} center`}>
        <h3 id="faqHeading" className="small-heading">FAQ</h3>

        {faqElems}

    </section>
  )
}
