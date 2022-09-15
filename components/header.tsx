import NextLink from 'next/link'
import { Box, Flex, HStack, Link, IconButton, useDisclosure, useColorModeValue, Stack } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useLocale } from '../lib/use-locale'
import { LanguageSwitcher } from './language-switcher'
import Image from 'next/image'

interface LinkItem {
    name: string
    href: string
}

interface NavLinkProps {
    link: LinkItem
}

const NavLink = (props: NavLinkProps) => (
    <NextLink href={props.link.href} passHref>
        <Link
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
        >
            {props.link.name}
        </Link>
    </NextLink>
)

export function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { message } = useLocale()

    const Links: LinkItem[] = [
        {
            name: message.tutorial,
            href: '/docs/tutorial',
        },
        {
            name: message.faq,
            href: '/docs/faq',
        },
        {
            name: message.pricing,
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
                        <NextLink href={'/'} passHref>
                            <Image src={'/assets/logo/logo.svg'} width={'198px'} height={'30px'} alt="logo" />
                        </NextLink>
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
