import {
    Menu,
    MenuButton,
    MenuList,
    MenuOptionGroup,
    MenuItemOption,
    IconButton,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { IoLanguage } from 'react-icons/io5'
import languageDetector from '../lib/language-detector'
import { makeAsPath } from '../lib/route'
import { useLanguage } from '../lib/use-language'

export function LanguageSwitcher() {
    const router = useRouter()
    const language = useLanguage()
    const { pathname, query } = router

    const transitLocale = (locale: string) => {
        query.locale = locale
        const asPath = makeAsPath(router)
        router.push({ pathname, query }, asPath)

        languageDetector.cache(locale)
    }

    return (
        <Menu closeOnSelect={false}>
            <MenuButton as={IconButton} icon={<IoLanguage />} />
            <MenuList>
                <MenuOptionGroup defaultValue={language} type="radio">
                    <MenuItemOption value="en" onClick={() => transitLocale('en')}>
                        English
                    </MenuItemOption>
                    <MenuItemOption value="ja" onClick={() => transitLocale('ja')}>
                        日本語
                    </MenuItemOption>
                </MenuOptionGroup>
            </MenuList>
        </Menu>
    )
}
