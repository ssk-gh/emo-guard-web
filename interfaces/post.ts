import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import type Author from './author'

type PostType = {
    slug: string
    title: string
    shouldList: boolean
    order: number
    date: string
    coverImage: string
    author: Author
    excerpt: string
    ogImage: {
        url: string
    }
    content: string
    source: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, string>>
}

export default PostType
