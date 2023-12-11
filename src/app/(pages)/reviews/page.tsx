import type { Metadata } from "next"
import ReviewHeader from "@/app/(mainsite)/components/reviews/ReviewHeader/ReviewHeader"
import Reviews from "@/app/(mainsite)/components/reviews/Reviews/Reviews"

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