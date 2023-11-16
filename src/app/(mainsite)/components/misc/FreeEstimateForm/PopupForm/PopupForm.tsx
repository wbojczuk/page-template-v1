"use client"

import "./popupform.css"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import handleFormSubmit from "../handleFormSubmit"
import emailIcon from "../icons/email.svg"
import locationIcon from "../icons/location.svg"
import personIcon from "../icons/person.svg"
import phoneIcon from "../icons/phone.svg"

export default function PopUpForm({setStatus}: {setStatus: any}) {

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

            const mainFormIntersection = new IntersectionObserver((entries)=>{
                entries.forEach((entry)=>{
                    if(entry.isIntersecting){
                        isIntersecting = true
                    }else{
                        isIntersecting = false
                    }
                })
            }, {threshold: 0.1})
            mainFormIntersection.observe(document.getElementById("estimateForm")!)

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
    <div id="popupFormWrapper" ref={wrapperRef} >
        <form ref={formRef} id="popupForm" onSubmit={(evt)=>{handleFormSubmit(evt, setStatus, formRef); closeForm()}}>
    
        <input type="hidden" name="_next" value={`${window.location.origin}?messagesuccess=true${location.hash}`}/>
        <input type="hidden" name="_captcha" value="false"/>
        <input type="hidden" name="_subject" value="New estimate request"/>
            
            <h2 id="popupFormTitle">Get a <em>Free</em><br />Estimate!</h2>
            <div className="input-wrapper">
                <img id="formPersonIcon" src={personIcon} alt="Person Icon" />
                <input required type="text" name="name" id="nameInput" placeholder={"Name"} />
            </div>
            <div className="input-wrapper">
                <img id="formEmailIcon" src={emailIcon} alt="Email Icon" />
                <input required type="email" name="email" id="emailInput" placeholder={"Email Address"} />
            </div>
            <div className="input-wrapper">
            <img id="formPhoneIcon" src={phoneIcon} alt="Phone Icon" />
                <input required type="text" name="phoneNumber" id="phoneNumberInput" placeholder={"Phone Number"} />
            </div>
            <div className="input-wrapper">
            <img id="formLocationIcon" src={locationIcon} alt="Location Icon" />
                <input required type="text" name="serviceAddress" id="locationInput" placeholder={"Service Address"} />
            </div>
            <div className="input-wrapper">
                <textarea required maxLength={2000} name="message" id="messageInput" placeholder={"Any Additional Details..."}></textarea>
            </div>

            <input id="popupFormSubmit" type="submit" value="Get Your Free Estimate!" />
            <div className="form-disclaimer">We will never spam you or sell your data, the data submitted will only be used to send estimates and invoices to.</div>
        
            <button id="popupFormClose" onClick={(evt)=>{
                evt.preventDefault();
                closeForm()
            }}></button>        
        </form>
    </div>
  )
}
