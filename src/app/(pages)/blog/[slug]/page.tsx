import type { Metadata } from "next"
import BlogContent from "@/app/(mainsite)/components/blogpage/BlogContent/BlogContent"
import getBlog from "@/app/controllers/getBlog";
import { getDocumentBySlug } from "outstatic/server";
import { getDocumentSlugs } from "outstatic/server";

export async function generateMetadata({params}: {params: {slug: string}}): Promise<Metadata>{
    const poststuff = getDocumentBySlug("posts", params.slug, ["title", "description"])
    return {
        title: `${poststuff?.title} | Rome Digital Web Design`,
        description: poststuff?.description
        }
}



export async function generateStaticParams() {
  const posts = getDocumentSlugs('posts')
  return posts.map((slug) => ({ slug }))
}

export default async function Article({params}: {params: {slug: string}}){

    const postData = await getBlog(params.slug || "")
    return(
        <BlogContent postData={postData} />
    )
}