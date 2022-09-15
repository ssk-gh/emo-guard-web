import Script from 'next/script'
import { GoogleAnalyticsId } from '../lib/gtag'

export function GoogleAnalytics() {
    if (!GoogleAnalyticsId) {
        return null
    }

    return (
        <>
            {/* Google tag (gtag.js) */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GoogleAnalyticsId}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GoogleAnalyticsId}', {
                          page_path: window.location.pathname,
                        });
                    `,
                }}
            />
        </>
    )
}
