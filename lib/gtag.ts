export const GoogleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
    if (!GoogleAnalyticsId) {
        return
    }

    window.gtag('config', GoogleAnalyticsId, {
        page_path: url,
    })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: EventProps) => {
    if (!GoogleAnalyticsId) {
        return
    }

    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    })
}

type EventProps = {
    action: string
    category: string
    label: string
    value: number
}
