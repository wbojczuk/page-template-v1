import { getDocumentBySlug } from "outstatic/server"
import markdownToHtml from "./markdownToHtml"


export default async function getBlog(slug: string){
    const post = getDocumentBySlug("posts", slug, [
        "title",
        "publishedAt",
        'slug',
        'author',
        'content',
        'coverImage',
        "description"
    ])

    const content = await markdownToHtml(post?.content || "")

    return {
        ...post,
        content
    }
}