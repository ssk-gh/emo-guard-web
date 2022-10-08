import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
    Image,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { LanguageSwitcher } from './language-switcher'
import { useTranslation } from 'next-i18next'
import { UniversalLink } from './universal-link'

interface LinkItem {
    name: string
    href: string
}

interface NavLinkProps {
    link: LinkItem
}

const NavLink = (props: NavLinkProps) => (
    <UniversalLink
        href={props.link.href}
        chakraLinkProps={{
            px: 2,
            py: 1,
            rounded: 'md',
            _hover: {
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            },
        }}
    >
        {props.link.name}
    </UniversalLink>
)

export function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { t } = useTranslation('common')

    const Links: LinkItem[] = [
        {
            name: t('tutorial'),
            href: '/docs/tutorial',
        },
        {
            name: t('faq'),
            href: '/docs/faq',
        },
        {
            name: t('pricing'),
            href: '/pricing',
        },
    ]

    return (
        <>
            <Box
                as={'header'}
                top={0}
                position={'sticky'}
                background={'white'}
                zIndex={'sticky'}
                boxShadow={'md'}
                px={4}
            >
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <HStack _hover={{ cursor: 'pointer' }}>
                        <UniversalLink href={'/'}>
                            <Image
                                src={'/assets/logo/logo.svg'}
                                width={'198px'}
                                height={'30px'}
                                alt="logo"
                            />
                        </UniversalLink>
                    </HStack>
                    <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                        {Links.map((link) => (
                            <NavLink key={link.name} link={link} />
                        ))}
                        <LanguageSwitcher />
                    </HStack>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link.name} link={link} />
                            ))}
                            <Box>
                                <LanguageSwitcher />
                            </Box>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    )
}
