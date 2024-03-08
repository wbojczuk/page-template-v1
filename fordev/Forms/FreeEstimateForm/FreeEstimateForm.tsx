"use client"

import { useRef, useState } from "react"
import "./freeestimateform.css"
import sendEmail from "../../controllers/sendEmail"
import MessageStatus from "../MessageStatus/MessageStatus"

export default function FreeEstimateForm() {

    const [status, setStatus] = useState("none")
    const formRef: any = useRef();


  return (
    <>
    <MessageStatus status={status} setStatus={setStatus}/>
    <form ref={formRef} id="estimateForm" onSubmit={(evt)=>{sendEmail(evt, setStatus, {
        receiverEmail: process.env.NEXT_PUBLIC_DELIVERY_EMAIL!,
        data: Object.fromEntries(new FormData(formRef.current))
    }, formRef.current)}}>

        {/* START FIELDS */}
            
       
            <div className="input-wrapper">
                
            <input className="half-input" required type="text" name="First_Name" id="nameInput1" placeholder={"First name"} />
            <input className="half-input" required type="text" name="Last_Name" id="nameInput2" placeholder={"Last name"} />
            </div>
            
            <div className="input-wrapper">
               
                <input className="half-input" required type="tel" name="Phone_Number" id="phoneNumberInput" placeholder={"Phone Number"} />
                <input className="half-input" required type="email" name="Email" id="emailInput" placeholder={"Email Address"} />
            </div>
            <div className="input-wrapper">
               
            <input required type="text" name="What_Services" id="service input" placeholder={"What Services Are You Interested In?"} />
            </div>

            <div className="input-wrapper">
                <textarea required maxLength={5000} name="Details" id="messageInput" placeholder={"Additional details..."}></textarea>
            </div>
            
            <div className="center">
                <a onClick={(evt)=>{evt.preventDefault(); formRef.current.requestSubmit();}} className="main-link" id="estimateFormSubmit" type="submit">Submit</a>
            </div>

            {/* END FIELDS */}
        </form>
    </>
  )
}
