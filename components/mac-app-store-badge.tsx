import { useLocale } from '../lib/use-locale'
import Image from 'next/image'

export function MacAppStoreBadge() {
    const { locale } = useLocale()

    switch (locale) {
        case 'ja':
            return (
                <img
                    src={'/assets/badge/Download_on_the_Mac_App_Store_Badge_JP_RGB_blk_100317.svg'}
                    width="140.18325"
                    height="40"
                />
            )
        default:
            return (
                <img
                    src={'/assets/badge/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_blk_092917.svg'}
                    width="156.10054"
                    height="40"
                />
            )
    }
}
