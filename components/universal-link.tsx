import { Link, LinkProps } from '@chakra-ui/react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { ReactNode } from 'react'
import { useLanguage } from '../lib/use-language'
import i18nextConfig from '../next-i18next.config'

interface UniversalLinkProps {
    href: string
    children: ReactNode
    locale?: string
    nextLinkProps?: NextLinkProps
    chakraLinkProps?: LinkProps
}

export function UniversalLink({
    href,
    children,
    locale,
    nextLinkProps,
    chakraLinkProps,
}: UniversalLinkProps) {
    if (!href) {
        throw new Error('href is required.')
    }

    const language = useLanguage()
    const nextLocale = locale ?? language
    const isExternal = href.startsWith('http')
    const url = getUrl(href, nextLocale, isExternal)

    return (
        <NextLink href={url} passHref {...nextLinkProps}>
            <Link isExternal={isExternal} {...chakraLinkProps}>
                {children}
            </Link>
        </NextLink>
    )
}

const getUrl = (href: string, locale: string, isExternal: boolean) => {
    if (isExternal) {
        return href
    }

    return i18nextConfig.i18n.locales.some((locale) => href.startsWith(`/${locale}`))
        ? href
        : `/${locale}${href}`
}
