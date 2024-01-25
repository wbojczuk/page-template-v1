"use client"

import styles from "./multipartform.module.css"
import handleFormSubmit from "../FreeEstimateForm/handleFormSubmit"
import MessageStatus from "../MessageStatus/MessageStatus"
import { useRef, useState, ReactNode, useEffect } from "react"

interface multiPartFormProps {
    sections: ReactNode[]
}

export default function MultiPartForm(props: multiPartFormProps) {

    // ----- States

    const [status, setStatus] = useState("none")
    const [sectionTitle, setSectionTitle] = useState("Temp Title")
    const [currentSection, setCurrentSection] = useState(0)
    const [isLastSection, setIsLastSection] = useState(false)



    // ----- Static-ish Variables

    const sectionsAmt = props.sections.length

    const sectionElems = props.sections.map((data, i)=>{
        return(
            <div className={`${styles.section} ${(i == 0) ? styles.primary : styles.hidden}`} key={i} id={`multiPartFormSection${i}`}>
                {data}
            </div>
        )
    })



    // ----- Refs

    const formRef: any = useRef()
    
    const formDataObjectRef: any = useRef()

    const sectionRefs: any = useRef()



    // ----- Event Handlers

    function forwardButtonHandler(){

        if(checkCurrentSectionValidity()){

            saveFormData()

            if(isLastSection){
                formRef.current.requestSubmit()
            }else{
                const oldSection = currentSection
                const newSection = oldSection + 1
                console.log(sectionRefs.current[oldSection])
                sectionRefs.current[oldSection].classList.remove(styles.primary)
                sectionRefs.current[oldSection].classList.add(styles.hidden)
                sectionRefs.current[newSection].classList.remove(styles.hidden)
                sectionRefs.current[newSection].classList.add(styles.primary)

                setCurrentSection((oldVal)=>{
                    return ++oldVal
                })
            }

        }

    }

    function backButtonHandler(){

    }


    // ----- Helper Functions

    function saveFormData(){
        formDataObjectRef.current = Object.fromEntries(new FormData (formRef.current))
    }

    function checkCurrentSectionValidity(){
        let invalidAmt = 0

        const elemsToCheck = document.getElementById(`multiPartFormSection${currentSection}`)?.querySelectorAll("input:not(input[type='submit']):not(input[type='hidden']), section:not(section[type='hidden']), textarea:not(textarea[type='hidden'])")
        elemsToCheck?.forEach((elem, i)=>{
            //@ts-ignore
            elem.setCustomValidity("")
            //@ts-ignore
            if(!elem.checkValidity()){
                //@ts-ignore
                elem.setCustomValidity(elem.validationMessage)
                //@ts-ignore
                elem.reportValidity()
                ++invalidAmt
            }else{
               //@ts-ignore
               elem.setCustomValidity("")
                //@ts-ignore
                elem.reportValidity()
            }
        })
        return (invalidAmt == 0)
    }


    // ----- Hooks


    // Init
    useEffect(()=>{
        saveFormData()

        const tempSectionRefs = []
        for(let i = 0; i < sectionsAmt; ++i){
            tempSectionRefs.push(document.getElementById(`multiPartFormSection${i}`))
        }
        sectionRefs.current = tempSectionRefs

    }, [])


    // OnSectionChange
    useEffect(()=>{
        if((currentSection + 1) === sectionsAmt){
            setIsLastSection(true)
        }
    }, [currentSection])



  return (
    <>
        <MessageStatus status={status} setStatus={setStatus}/>

        <form className={styles.form} ref={formRef} id="multiPartForm" onSubmit={(evt)=>{/* handleFormSubmit(evt, setStatus, formRef) */}}>
            <input type="hidden" name="_subject" value="New message from website"/>
            <input type="hidden" name="_captcha" value="false"/>

            {/* ----- Top Header */}
            <div className={styles.header}>
                <h2>{sectionTitle}</h2>
            </div>

            {/*  ----- Content  */}
            <div className={styles.contentWrapper}>
                {sectionElems}
            </div>

            {/*  ----- Bottom Nav  */}
            <div className={styles.navButtons}>
                <a onClick={(evt)=>{evt.preventDefault(); backButtonHandler()}} className={styles.backButton}>Back</a>
                <a onClick={(evt)=>{evt.preventDefault(); forwardButtonHandler()}} className={styles.forwardButton}>{(isLastSection) ? "Submit" : "Continue"}</a>
            </div>
        </form>
    </>
  )
}
