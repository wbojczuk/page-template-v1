"use client"
// import PhoneNumber from "./PhoneNumber/PhoneNumber"
import { useRef, useState } from "react"
import handleFormSubmit from "./handleFormSubmit"
import "./freeestimateform.css"
import Image from "next/image"
import MessageStatus from "../MessageStatus/MessageStatus"

export default function FreeEstimateForm() {

    const [status, setStatus] = useState("none")
    const formRef: any = useRef();


  return (
    <>
    <MessageStatus status={status} setStatus={setStatus}/>
    <form ref={formRef} id="estimateForm" onSubmit={(evt)=>{handleFormSubmit(evt, setStatus, formRef)}}>
        <input type="hidden" name="_subject" value="New message from website"/>
        <input type="hidden" name="_captcha" value="false"/>

        {/* START FIELDS */}
            
        <h2 id="estimateFormTitle">Send a Message!</h2>
            <div className="input-wrapper">
                <Image width={200} height={200} id="formPersonIcon" src={"/icons/person.png"} alt="Person Icon" />
                <input required type="text" name="name" id="nameInput" placeholder={"Name"} />
            </div>
            
            <div className="input-wrapper">
                <Image width={200} height={200} id="formPhoneIcon" src={"/icons/phone.png"} alt="Phone Icon" />
                <input required type="text" name="phoneNumber" id="phoneNumberInput" placeholder={"Phone Number"} />
            </div>
            <div className="input-wrapper">
                <Image width={200} height={200} id="formEmailIcon" src={"/icons/email.png"} alt="Email Icon" />
                <input required type="email" name="email" id="emailInput" placeholder={"Email Address"} />
            </div>

            <div className="input-wrapper">
                <textarea required maxLength={2000} name="details" id="messageInput" placeholder={"Details about your project"}></textarea>
            </div>
            
            <div className="center">
                <a onClick={(evt)=>{evt.preventDefault(); formRef.current.requestSubmit();}} className="main-button" id="estimateFormSubmit" type="submit">Let's Go! <img src="./icons/arrow-right.svg" aria-hidden /></a>
            </div>

            {/* END FIELDS */}

            <div className="form-disclaimer">We will never spam you or sell your data, the data submitted will only be used to send estimates and invoices to.</div>
        </form>
    </>
  )
}
