"use client"

import { useRef, useState } from "react"
import "./freeestimateform.css"
import sendEmail from "@/app/(mainsite)/controllers/sendEmail"
import MessageStatus from "./MessageStatus/MessageStatus"

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

        <h3 id="estimateFormTitle">Get A Free Estimate!</h3>

        {/* START FIELDS */}
            
       
            <div className="input-wrapper">
                <input required type="text" name="First_Name" id="fname_input" placeholder={"First Name"} />
                <input required type="text" name="Last_Name" id="lname_input" placeholder={"Last Name"} />
            </div>
            
            <div className="input-wrapper">
                <input required type="tel" name="Phone_Number" id="phonenum" placeholder={"Phone Number"} />
            </div>
            <div className="input-wrapper">
               
            <input required type="email" name="Email" id="email" placeholder={"Email"} />
            </div>

            <div className="input-wrapper">
                <textarea required maxLength={5000} name="Details" id="messageInput" placeholder={"Additional details..."}></textarea>
            </div>
            
            <div className="center">
                <a onClick={(evt)=>{evt.preventDefault(); formRef.current.requestSubmit();}} className={`main-link`} id="estimateFormSubmit" type="submit">Submit</a>
            </div>

            {/* END FIELDS */}
        </form>
    </>
  )
}
