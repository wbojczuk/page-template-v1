import { getDocuments } from "outstatic/server"

export default function getBlogs(){
    const posts = getDocuments('posts', ['title', "description", "author", "publishedAt", "slug", "coverImage"])

  return posts
}