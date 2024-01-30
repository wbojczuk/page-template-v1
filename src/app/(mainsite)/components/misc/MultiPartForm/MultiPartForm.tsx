"use client"

import styles from "./multipartform.module.css"
import handleFormSubmit from "../FreeEstimateForm/handleFormSubmit"
import DisplaySteps from "./styling/DisplaySteps/DisplaySteps"
import MessageStatus from "../MessageStatus/MessageStatus"
import { useRef, useState, ReactNode, useEffect } from "react"

interface sectionProps{
        elements: ReactNode,
        title?: string,
        subtitle?: string
}

interface multiPartFormProps {
    sections: sectionProps[],
    displaySteps?: boolean,
    displayStepsSize?: number,
    onSubmit?: any
    
}

export default function MultiPartForm(props: multiPartFormProps) {

    // ----- States

    const [status, setStatus] = useState("none")
    const [sectionTitle, setSectionTitle] = useState("")
    const [sectionSubtitle, setSectionSubtitle] = useState("")
    const [currentSection, setCurrentSection] = useState(0)
    const [isLastSection, setIsLastSection] = useState(false)



    // ----- Refs

    const formRef: any = useRef()
    const formDataObjectRef: any = useRef()
    const sectionRefs: any = useRef()
    const forwardButtonRef: any = useRef()
    const backButtonRef: any = useRef()



    // ----- Static-ish Variables

    const sectionsAmt = props.sections.length

    const displaySteps = (props.displaySteps != null) ? props.displaySteps : true

    const onSubmit = ()=>{} //(evt: any)=>handleFormSubmit(evt, setStatus, formRef)

    let displayStepsSize: any = 0

    let displayStepsConnectorWidth: number = 0


    const sectionElems = props.sections.map((data, i)=>{
        return(
            <div className={`${styles.section} ${(i == 0) ? styles.primary : styles.hidden}`} key={i} id={`multiPartFormSection${i}`}>
                {data.elements}
            </div>
        )
    })



    // ----- Event Handlers

    function forwardButtonHandler(){

        if(checkCurrentSectionValidity()){

            saveFormData()

            if(isLastSection){
                formRef.current.requestSubmit()
            }else{
                const oldSection = currentSection
                const newSection = oldSection + 1
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
        saveFormData()

       if(currentSection > 0){
            const oldSection = currentSection
            const newSection = oldSection - 1
            sectionRefs.current[oldSection].classList.remove(styles.primary)
            sectionRefs.current[oldSection].classList.add(styles.hidden)
            sectionRefs.current[newSection].classList.remove(styles.hidden)
            sectionRefs.current[newSection].classList.add(styles.primary)

            setCurrentSection((oldVal)=>{
                return --oldVal
            })
        }
    }


    // ----- Helper Functions

    function saveFormData(){
        formDataObjectRef.current = Object.fromEntries(new FormData (formRef.current))
    }

    function checkCurrentSectionValidity(){
        let invalidAmt = 0

        // @ts-ignore
        const elemsToCheck = Array.from(document.getElementById(`multiPartFormSection${currentSection}`)?.querySelectorAll("input:not(input[type='submit']):not(input[type='hidden']), section:not(section[type='hidden']), textarea:not(textarea[type='hidden'])")).reverse()
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


    // OnSectionChange
    useEffect(()=>{
        if((currentSection + 1) === sectionsAmt){
            setIsLastSection(true)
        }else{
            setIsLastSection(false)
        }

        //@ts-ignore
        setSectionTitle((props.sections[currentSection].title != null) ? props.sections[currentSection].title : "")

        //@ts-ignore
        setSectionSubtitle((props.sections[currentSection].subtitle != null) ? props.sections[currentSection].subtitle : "")

        if(currentSection === 0){
            backButtonRef.current.classList.add(styles.disabled)
        }else{
            backButtonRef.current.classList.remove(styles.disabled)
        }

    }, [currentSection])



    //----- Init -----


    if(displaySteps){
        displayStepsSize = (props.displayStepsSize != null) ? props.displaySteps : 15
        displayStepsConnectorWidth = (100 - (displayStepsSize as number * sectionsAmt)) / (sectionsAmt - 1)
    }
    

    useEffect(()=>{
        saveFormData()

        const tempSectionRefs = []
        for(let i = 0; i < sectionsAmt; ++i){
            tempSectionRefs.push(document.getElementById(`multiPartFormSection${i}`))
        }
        sectionRefs.current = tempSectionRefs
        console.log(formRef.current.querySelectorAll("div[data-class='select']"))


        formRef.current.querySelectorAll("div[data-class='select']>select").forEach((elem: HTMLSelectElement)=>{
            window.addEventListener("click", (evt)=>{
                if((evt.target != elem)){console.log(evt.target);elem.setAttribute("data-isopen", "false")}
                
            })
            elem.setAttribute("data-isopen", "false");
            elem.onclick = (evt: any)=>{
                //@ts-ignore
                if((evt.currentTarget.getAttribute("data-isopen") === "false")){evt.currentTarget.setAttribute("data-isopen", "true")}else{evt.currentTarget.setAttribute("data-isopen", "false")}
            }
        })

    }, [])



  return (
    <>
        <MessageStatus status={status} setStatus={setStatus}/>

        <form className={styles.form} ref={formRef} id="multiPartForm" onSubmit={onSubmit}>
            <input type="hidden" name="_subject" value="New message from website"/>
            <input type="hidden" name="_captcha" value="false"/>

            {/* ----- Top Header */}
            <div className={styles.header}>
                {(displaySteps)&&
                    <DisplaySteps
                    displayStepsConnectorWidth={displayStepsConnectorWidth}
                    displayStepsSize={displayStepsSize}
                    currentSection={currentSection}
                    sectionsAmt={sectionsAmt}
                    />
                }
                <h2>{sectionTitle}</h2>
                <h4>{sectionSubtitle}</h4>
            </div>

            {/*  ----- Content  */}
            <div className={styles.contentWrapper}>
                {sectionElems}
            </div>

            {/*  ----- Bottom Nav  */}
            <div className={styles.navButtonsWrapper}>
                <a ref={backButtonRef} onClick={(evt)=>{evt.preventDefault(); backButtonHandler()}} className={`${styles.backButton} ${styles.navButton}`}>Back</a>
                <a ref={forwardButtonRef} onClick={(evt)=>{evt.preventDefault(); forwardButtonHandler()}} className={`${styles.forwardButton} ${styles.navButton}`}>{(isLastSection) ? "Submit" : "Continue"}</a>
            </div>
        </form>
    </>
  )
}
