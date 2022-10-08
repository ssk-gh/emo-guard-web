import { NextRouter, useRouter } from 'next/router'
import i18nextConfig from '../next-i18next.config'
import languageDetector from './language-detector'

export function useLanguage() {
    const router = useRouter()
    return getLanguage(router)
}

const getLanguage = (router: NextRouter) => {
    const queryLocale = router.query.locale
    const altLocale = languageDetector.detect() ?? i18nextConfig.i18n.defaultLocale
    if (!queryLocale) {
        return altLocale
    }

    const locale = typeof queryLocale === 'string' ? queryLocale : queryLocale[0]
    return i18nextConfig.i18n.locales.includes(locale) ? locale : altLocale
}
