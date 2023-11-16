"use client"

import { useEffect, useRef } from "react";
import "./leavereviewbutton.css"
import LeaveReviewButtonItem from "./LeaveReviewButtonItem"
import gsap from "gsap"

interface leaveReviewButtonPropType{
  facebook?: string,
  google?: string,
  nextdoor?: string,
  yelp?: string
}

export default function LeaveReviewButton(props: leaveReviewButtonPropType) {
  //@ts-ignore
  const reviewKeys = Object.keys(props);

  const isAnimating: any = useRef()
  const toggleState: any = useRef()

  const leaveReviewItemElems = reviewKeys.map((key: string)=>{
    //@ts-ignore
    return <LeaveReviewButtonItem key={key} url={props[key]} class={key}/>
  })

  function singleMediaRedirect(){
    //@ts-ignore
    window.location.href = props[reviewKeys]
  }

  useEffect(()=>{
    window.addEventListener("click", (evt)=>{
      //@ts-ignore
      if(!evt.target.classList.contains("review-button-part")){
        isAnimating.current = false;
        closeReviewMenu()
      }
    })
  }, [])

  function openReviewMenu(){
    
    if(!isAnimating.current){
    toggleState.current = true
    isAnimating.current = true;
    gsap.to(Array.from(document.querySelectorAll(".leave-review-button-item")).reverse(), {
      "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      opacity: 1,
      duration: 0.4,
      stagger: 0.1,
      ease: "power2.out",
      onComplete: ()=>{isAnimating.current = false}
    })
  }
  }

 function closeReviewMenu(){
  if(!isAnimating.current){
    toggleState.current = false
    isAnimating.current = true;
    gsap.to(Array.from(document.querySelectorAll(".leave-review-button-item")), {
    "clip-path": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    opacity: 0,
    duration: 0.4,
    stagger: 0.1,
    ease: "power2.in",
    onComplete: ()=>{isAnimating.current = false}
  })
}
 }

 function toggleReviewMenu(){
  if(toggleState.current == false || toggleState.current == undefined){
    openReviewMenu()
  }else{
    closeReviewMenu()
  }
 }

  return (
    <div style={{display: (reviewKeys.length > 1) ? "inline-block": "none"}} id="leaveReviewButtonWrapper">
      <button style={{marginRight: 0}} className="get-in-touch-button review-button-part" onClick={(reviewKeys.length < 1) ? singleMediaRedirect : toggleReviewMenu} id="leaveReviewButton">
      Leave a Review!
          </button>
      <div id="leaveReviewButtonMenu">
        {leaveReviewItemElems}
      </div>
    </div>
  )
}
