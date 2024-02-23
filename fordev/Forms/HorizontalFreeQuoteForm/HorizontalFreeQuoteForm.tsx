"use client"
import { InlineIcon } from "@iconify/react"
import { useRef, useState } from "react"
import styles from "./horizontalfreequoteform.module.css"
import MessageStatus from "../MessageStatus/MessageStatus"
import handleFormSubmit from "../FreeEstimateForm/handleFormSubmit"

export default function HorizontalFreeQuoteForm() {

    const [status, setStatus] = useState("none")
    const formRef: any = useRef()

  return (
    <>
        <MessageStatus status={status} setStatus={setStatus} />
        <div className={styles.formWrapper}>
            <h2 className={styles.title}>GET YOUR FREE QUOTE!</h2>
            <form ref={formRef} className={styles.form} onSubmit={(evt: any)=>handleFormSubmit(evt, setStatus, formRef)}>
                <div className={styles.inputWrapper}>
                    <input required type="text" name="name" id="nameInput" placeholder="Name"/>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#c8c8c8" d="M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10"></path></svg>
                </div>
                <div className={styles.inputWrapper}>
                    <input required type="tel" name="phone" id="phoneInput" placeholder="Phone" />

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="rgb(200, 200, 200)" d="M15 12h2a5 5 0 0 0-5-5v2a3 3 0 0 1 3 3m4 0h2c0-5-4.03-9-9-9v2c3.86 0 7 3.13 7 7m1 3.5c-1.25 0-2.45-.2-3.57-.57c-.35-.11-.74-.03-1.02.25l-2.2 2.2a15.097 15.097 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1"></path></svg>
                </div>
                <div className={styles.inputWrapper}>
                    <input required type="email" name="email" id="emailInput" placeholder="Email" />

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#c8c8c8" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></path></svg>
                </div>
                <div className={styles.inputWrapper}>
                    <textarea name="howCanWeHelp" id="howCanWeHelpInput" placeholder="How can we help?"></textarea>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#c8c8c8" d="M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8"></path></svg>
                </div>
                <a onClick={()=>{formRef.current.requestSubmit()}} className="main-button">Submit  <InlineIcon icon="gg:arrow-right"/></a>
            </form>
        </div>
    </>
  )
}
