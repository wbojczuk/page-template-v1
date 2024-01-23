import type { Metadata } from "next"
import BlogContent from "@/app/(mainsite)/components/blogpage/BlogContent/BlogContent"
import getBlog from "@/app/controllers/getBlog";
import { getDocumentBySlug } from "outstatic/server";
import { getDocumentSlugs } from "outstatic/server";

export async function generateMetadata({params}: {params: {slug: string}}): Promise<Metadata>{
    const poststuff = getDocumentBySlug("posts", params.slug, ["title", 'coverImage', "description"])
    return {
        title: `${poststuff?.title}`,
        description: poststuff?.description,
        openGraph: {
            title: `${poststuff?.title}`,
            description: poststuff?.description,
            type: "website",
            images: [
              {
                url: poststuff?.coverImage || '',
                width: 1920,
                height: 1080,
              }
            ]
          },
          twitter: {
            card: 'summary_large_image',
            title: `${poststuff?.title}`,
            description: poststuff?.description,
            images: [ poststuff?.coverImage || '',]
          },
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