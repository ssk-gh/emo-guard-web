import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import i18nextConfig from '../next-i18next.config'

export const getStaticPaths = () => ({
    fallback: false,
    paths: getI18nPaths(),
})

export const getI18nPaths = () =>
    i18nextConfig.i18n.locales.map((locale) => ({
        params: {
            locale: locale,
        },
    }))

export function makeStaticProps(namespace: string[] = ['common']) {
    return async function getStaticProps(context: any) {
        return {
            props: await getI18nProps(context, namespace),
        }
    }
}

export async function getI18nProps(context: any, namespace: string[] = ['common']) {
    const locale = context?.params?.locale
    const props = {
        ...(await serverSideTranslations(locale, namespace)),
    }
    return props
}
