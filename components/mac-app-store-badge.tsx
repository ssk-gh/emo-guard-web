import { useLanguage } from '../lib/use-language'

export function MacAppStoreBadge() {
    const language = useLanguage()

    switch (language) {
        case 'ja':
            return (
                <img
                    src={'/assets/badge/Download_on_the_Mac_App_Store_Badge_JP_RGB_blk_100317.svg'}
                    width="140.18325"
                    height="40"
                    style={{ cursor: 'pointer' }}
                    alt="Download on the Mac App Store"
                    onClick={() =>
                        window.open(
                            'https://apps.apple.com/jp/app/emoguard/id6443750638?mt=12&itsct=apps_box_link&itscg=30200',
                            '_blank',
                            'noopener'
                        )
                    }
                />
            )
        default:
            return (
                <img
                    src={
                        '/assets/badge/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_blk_092917.svg'
                    }
                    width="156.10054"
                    height="40"
                    style={{ cursor: 'pointer' }}
                    alt="Download on the Mac App Store"
                    onClick={() =>
                        window.open(
                            'https://apps.apple.com/us/app/emoguard/id6443750638?mt=12&itsct=apps_box_link&itscg=30200',
                            '_blank',
                            'noopener'
                        )
                    }
                />
            )
    }
}
