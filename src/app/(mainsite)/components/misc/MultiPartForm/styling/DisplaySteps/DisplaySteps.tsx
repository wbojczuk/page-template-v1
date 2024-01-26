"use client"

import { CSSProperties, ReactNode, useEffect, useRef } from "react"
import styles from "./displaysteps.module.css"

interface displayStepsProps{
    displayStepsSize: any,
    displayStepsConnectorWidth: number,
    sectionsAmt: number,
    currentSection: number
}


export default function DisplaySteps(props: displayStepsProps) {

    
    const displayStepsElems: ReactNode[] = []

    const wrapperRef: any = useRef();



    // ----- Hooks

    // On currentSectionChange

    useEffect(()=>{
        const topValue = (props.currentSection == 0) ? 1 : (props.currentSection * 2) + 1;
        const initValue = props.sectionsAmt + props.sectionsAmt - 1;
        for(let i = 0; i < initValue; ++i){
            if(i < topValue){
                wrapperRef.current.children[i].classList.add(styles.filled)
            }else{
                wrapperRef.current.children[i].classList.remove(styles.filled)  
            }
        }
    }, [props.currentSection])

    
        for(let i = 0; i < props.sectionsAmt; ++i){
            const displayStepsCircleStyles = {"--circle-size": `${props.displayStepsSize}%`} as CSSProperties
            const displayStepsConnectorStyles = {"--connector-width": `${props.displayStepsConnectorWidth}%`} as CSSProperties
    
            displayStepsElems.push(
                <div className={styles.circle} style={displayStepsCircleStyles}>{i+1}</div>
            )
            if(i !== props.sectionsAmt - 1){
                displayStepsElems.push(<div className={styles.connector} style={displayStepsConnectorStyles}></div>)
            }
        }


  return (
    <div className={styles.stepsWrapper} ref={wrapperRef}>
       {displayStepsElems}
    </div>
  )
}
