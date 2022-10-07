import { useEffect } from 'react'
import { useRouter } from 'next/router'
import languageDetector from './language-detector'

export const useRedirect = (to?: string) => {
    const router = useRouter()
    const path = to ?? router.asPath

    useEffect(() => {
        const language = languageDetector.detect()
        languageDetector.cache(language)

        router.replace(`/${language}${path}`)
    })
}
