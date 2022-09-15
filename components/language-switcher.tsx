import { Menu, MenuButton, MenuList, MenuOptionGroup, MenuItemOption, IconButton } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { IoLanguage } from 'react-icons/io5'

export function LanguageSwitcher() {
    const router = useRouter()
    const { pathname, asPath, query, locale } = router

    const transitLocale = (locale: string) => {
        router.push({ pathname, query }, asPath, { locale })
    }

    return (
        <Menu closeOnSelect={false}>
            <MenuButton as={IconButton} icon={<IoLanguage />} />
            <MenuList>
                <MenuOptionGroup defaultValue={locale} type="radio">
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
