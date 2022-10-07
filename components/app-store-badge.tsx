import { useLanguage } from '../lib/use-language'

export function AppStoreBadge() {
    const language = useLanguage()

    switch (language) {
        case 'ja':
            return (
                <img
                    src={'/assets/badge/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg'}
                    width="108.85157"
                    height="40"
                />
            )
        default:
            return (
                <img
                    src={'/assets/badge/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg'}
                    width="119.66407"
                    height="40"
                />
            )
    }
}
