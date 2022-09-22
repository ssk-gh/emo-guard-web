import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export function getDocsDirectory(locale: string) {
    return join(process.cwd(), `_docs/${locale}`)
}

export function getPostSlugs(postsDirectory: string) {
    return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(postsDirectory: string, slug: string, fields: string[] = []) {
    const realSlug = slug.replace(/\.mdx$/, '')
    const fullPath = join(postsDirectory, `${realSlug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    type Items = {
        [key: string]: string
    }

    const items: Items = {}

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug
        }
        if (field === 'content') {
            items[field] = content
        }

        if (typeof data[field] !== 'undefined') {
            items[field] = data[field]
        }
    })

    return items
}

export function getAllPosts(postsDirectory: string, fields: string[] = []) {
    const slugs = getPostSlugs(postsDirectory)
    const posts = slugs
        .map((slug) => getPostBySlug(postsDirectory, slug, fields))
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.order < post2.order ? -1 : 1))
    return posts
}

export function getAllSlugs(postsDirectory: string) {
    const slugs = getPostSlugs(postsDirectory)
    return slugs.map((slug) => slug.replace(/\.mdx$/, ''))
}
