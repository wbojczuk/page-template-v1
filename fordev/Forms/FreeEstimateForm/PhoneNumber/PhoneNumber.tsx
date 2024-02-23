"use client"

import "intl-tel-input/build/css/intlTelInput.min.css"
import "./phonenumber.css"
//@ts-ignore
import intlTelInput from "intl-tel-input"
import { useEffect, useRef } from "react"

export default function PhoneNumber() {

    const inputRef: any = useRef();
    const codeRef: any = useRef();

    function updateNum(){
      setTimeout(()=>{
        codeRef.current.value = document.querySelector(".iti__selected-flag")!.getAttribute("title");
      }, 200)
     
    }

    useEffect(()=>{
        intlTelInput(inputRef.current, {
            utilsScript: "./vendor/utils.js"
          })

          updateNum();

          document.querySelectorAll(".iti__country").forEach((elem)=>{
            elem.addEventListener("click", updateNum);
          })
    }, [])

  return (
    <>
    <input style={{display: "none"}} type="text" name="country_code" id="countryCodeInput" ref={codeRef} />
    <input ref={inputRef} required type="tel" name="phone" id="phoneInput" placeholder={"Phone Number"} />
    </>
  )
}
