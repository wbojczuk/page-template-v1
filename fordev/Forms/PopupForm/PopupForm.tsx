"use client"

import "./popupform.css"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import sendEmail from "../../controllers/sendEmail"
import Image from "next/image"
import MessageStatus from "../MessageStatus/MessageStatus"

export default function PopUpForm() {

    const [status, setStatus] = useState("none")

    const formRef: any = useRef();
    const wrapperRef: any = useRef();

    function openForm(){
        wrapperRef.current.style.pointerEvents = "all";
        wrapperRef.current.style.display = "flex";
        gsap.to(wrapperRef.current, {
            opacity: 1,
            ease: "power3.in",
            duration: 0.5
        })
        gsap.to(formRef.current, {
            y: 0,
            ease: "bounce.out",
            duration: 1
        })
    }
    function closeForm(){
        wrapperRef.current.style.pointerEvents = "none";
        wrapperRef.current.style.display = "none";
        gsap.to(wrapperRef.current, {
            opacity: 0,
            ease: "power3.out",
            duration: 0.5
        })
        gsap.to(formRef.current, {
            y: "-30px",
            ease: "power3.out",
            duration: 0.5
        })
        localStorage.setItem("popupFormStats", JSON.stringify({lastShown: new Date().getTime(), isSent: false}))
    }

    
    useEffect(()=>{
        let showThisSession: boolean = false;
        
        if(localStorage.getItem("popupFormStats") == undefined){
            
            localStorage.setItem("popupFormStats", JSON.stringify({lastShown: 0, isSent: false}))
            showThisSession = true;

        }
        const formStats = JSON.parse(localStorage.getItem("popupFormStats")!)

        if(!formStats.isSent && ((formStats.lastShown + 600000) < new Date().getTime()) ){
            showThisSession = true
        }

        if(showThisSession){
            let randomTimeOut  = Math.floor(Math.random() * (180000 - 60000) + 60000);
            

            let isIntersecting = false
            //@ts-ignore
            function checkIfShow(){
                if(!isIntersecting){
                    openForm();
                    localStorage.setItem("popupFormStats", JSON.stringify({lastShown: new Date().getTime(), isSent: false}))
                }else{
                    let randomTimeOut  = Math.floor(Math.random() * (180000 - 60000) + 60000);
                    setTimeout(checkIfShow, randomTimeOut)
                }
            }

            setTimeout(checkIfShow, randomTimeOut)
        }

    }, [])

  return (
    <>
    <MessageStatus status={status} setStatus={setStatus} />
    <div id="popupFormWrapper" ref={wrapperRef} >
        <form ref={formRef} id="popupForm" onSubmit={(evt: any)=>{sendEmail(evt, setStatus,{
                receiverEmail: process.env.NEXT_PUBLIC_DELIVERY_EMAIL!,
                data: Object.fromEntries(new FormData(formRef.current))
            }, formRef.current); closeForm()}}>
            
            {/* START FIELDS */}

        <h2 id="popupFormTitle">Let's Talk!</h2>
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
                <a onClick={(evt)=>{evt.preventDefault(); formRef.current.requestSubmit();}} className="main-link" id="estimateFormSubmit" type="submit">Let's Go!</a>
            </div>


            <button id="popupFormClose" onClick={(evt)=>{
                evt.preventDefault();
                closeForm()
            }}></button>    

                {/* END FIELDS */}
        </form>
    </div>
    </>
  )
}
