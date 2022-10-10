import { Redirect } from '../../components/redirect'
import { getAllSlugs, getDocsDirectory } from '../../lib/api'
import i18nextConfig from '../../next-i18next.config'

export default Redirect

export async function getStaticProps() {
    return {
        props: {},
    }
}

export async function getStaticPaths() {
    const slugs = i18nextConfig.i18n.locales.flatMap((locale) =>
        getAllSlugs(getDocsDirectory(locale))
    )
    const paths = [...new Set(slugs)].map((slug) => ({ params: { slug: slug } }))

    return {
        paths: paths,
        fallback: false,
    }
}
