import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { GoogleAnalyticsId, pageview } from './gtag'

export const usePageView = () => {
    const router = useRouter()

    useEffect(() => {
        if (!GoogleAnalyticsId) {
            return
        }

        const handleRouteChange = (url) => {
            pageview(url)
        }

        router.events.on('routeChangeComplete', handleRouteChange)

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])
}
