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
                    style={{ cursor: 'pointer' }}
                    alt="Download on the App Store"
                    onClick={() =>
                        window.open(
                            'https://apps.apple.com/jp/app/emoguard-%E3%82%AD%E3%83%BC%E3%83%AF%E3%83%BC%E3%83%89%E3%83%96%E3%83%AD%E3%83%83%E3%82%AB%E3%83%BC/id6443750571?itsct=apps_box_link&itscg=30200',
                            '_blank',
                            'noopener'
                        )
                    }
                />
            )
        default:
            return (
                <img
                    src={'/assets/badge/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg'}
                    width="119.66407"
                    height="40"
                    style={{ cursor: 'pointer' }}
                    alt="Download on the App Store"
                    onClick={() =>
                        window.open(
                            'https://apps.apple.com/us/app/emoguard-keyword-blocker/id6443750571?itsct=apps_box_link&itscg=30200',
                            '_blank',
                            'noopener'
                        )
                    }
                />
            )
    }
}
