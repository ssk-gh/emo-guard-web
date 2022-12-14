import {
    Alert,
    AlertIcon,
    Box,
    Code,
    Heading,
    ListItem,
    OrderedList,
    Text,
    UnorderedList,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { ReactNode } from '@mdx-js/react/lib'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '../../../components/layout'
import PostHeader from '../../../components/post-header'
import PostTitle from '../../../components/post-title'
import { Sidebar } from '../../../components/sidebar'
import PostType from '../../../interfaces/post'
import Head from 'next/head'
import { getAllPosts, getAllSlugs, getDocsDirectory, getPostBySlug } from '../../../lib/api'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import prism from 'remark-prism'
import Container from '../../../components/container'
import { Developer } from '../../../components/developer'
import i18nextConfig from '../../../next-i18next.config'
import { getI18nProps } from '../../../lib/get-static'
import { UniversalLink } from '../../../components/universal-link'
import NotFound from '../../404'

const components = {
    h1: (props) => <Heading as={'h1'} size={'2xl'} mt={12} mb={3} {...props} />,
    h2: (props) => <Heading as={'h2'} size={'lg'} mt={12} mb={3} {...props} />,
    h3: (props) => <Heading as={'h3'} size={'md'} mt={10} mb={1} {...props} />,
    h4: (props) => <Heading as={'h4'} size={'sm'} mt={5} mb={0} {...props} />,
    p: (props) => <Text my={5} lineHeight={1.625} {...props} />,
    a: (props) => (
        <UniversalLink chakraLinkProps={{ isExternal: true, color: 'teal.500' }} {...props}>
            {props.children} <ExternalLinkIcon mx="2px" />
        </UniversalLink>
    ),
    ul: (props) => (
        <Box mx={3} my={5}>
            <UnorderedList lineHeight={1.625} {...props} />
        </Box>
    ),
    ol: (props) => (
        <Box mx={3} my={5}>
            <OrderedList lineHeight={1.625} {...props} />
        </Box>
    ),
    li: (props) => <ListItem {...props} />,
    blockquote: (props) => <Alert my={5} colorScheme={'gray'} variant={'left-accent'} {...props} />,
    code: (props) => <Code {...props} />,
    Box,
    Alert,
    AlertIcon,
    Developer,
}

type Props = {
    post: PostType
    allPosts: PostType[]
    children: ReactNode
    preview?: boolean
}

export default function Doc({ post, allPosts, children, preview }: Props) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <NotFound />
    }

    return (
        <Layout preview={preview}>
            <Sidebar allPosts={allPosts}>
                <Box
                    rounded={'2xl'}
                    bg={'white'}
                    mx={{ base: 0, md: 6 }}
                    my={6}
                    px={10}
                    py={6}
                    boxShadow={'md'}
                >
                    <Container>
                        {router.isFallback ? (
                            <PostTitle>Loading???</PostTitle>
                        ) : (
                            <>
                                <article className="mb-32 markdown">
                                    <Head>
                                        <title>{post.title} | EmoGuard</title>
                                        {post.ogImage.url ? (
                                            <meta property="og:image" content={post.ogImage.url} />
                                        ) : undefined}
                                    </Head>
                                    <PostHeader
                                        title={post.title}
                                        coverImage={post.coverImage}
                                        date={post.date}
                                        author={post.author}
                                    />
                                    <MDXRemote {...post.source} components={components} />
                                </article>
                            </>
                        )}
                    </Container>
                </Box>
            </Sidebar>
        </Layout>
    )
}

type Params = {
    params: {
        slug: string
        locale: string
    }
}

export async function getStaticProps({ params }: Params) {
    const docsDirectory = getDocsDirectory(params.locale)
    const post = getPostBySlug(docsDirectory, params.slug, [
        'title',
        'slug',
        'shouldList',
        'order',
        'date',
        'author',
        'content',
        'ogImage',
        'coverImage',
    ])
    const mdxSource = await serialize(post.content, {
        mdxOptions: {
            remarkPlugins: [prism],
            rehypePlugins: [],
            format: 'mdx',
        },
    })
    const allPosts = getAllPosts(docsDirectory, [
        'title',
        'slug',
        'shouldList',
        'order',
        'date',
        'author',
        'coverImage',
        'excerpt',
    ])
    const i18nProps = await getI18nProps({ params })

    return {
        props: {
            post: {
                ...post,
                source: mdxSource,
            },
            allPosts,
            ...i18nProps,
        },
    }
}

export async function getStaticPaths() {
    const paths = i18nextConfig.i18n.locales.flatMap((locale) => {
        const slugs = getAllSlugs(getDocsDirectory(locale))
        const paths = slugs.map((slug) => ({ params: { slug: slug, locale: locale } }))
        return paths
    })

    return {
        paths: paths,
        fallback: false,
    }
}
