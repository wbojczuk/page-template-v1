import type { Metadata } from "next"
import ReviewHeader from "../../../../fordev/Reviews/Reviews Style 1/ReviewHeader/ReviewHeader"
import Reviews from "../../../../fordev/Reviews/Reviews Style 1/Reviews/Reviews"

export const metadata: Metadata = {
    title: "Our Reviews",
    description: ""
}

export default function ReviewPage(){
    return(
        <>
            <ReviewHeader />
            <Reviews />
        </>
    )
}