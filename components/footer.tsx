import { Box, Container, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image'
import { useLocale } from '../lib/use-locale'

export function Footer() {
    const { locale, message } = useLocale()

    return (
        <Box
            as={'footer'}
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
        >
            <Container as={Stack} maxW={'6xl'} py={4} spacing={4} justify={'center'} align={'center'}>
                <NextLink href={'/'} passHref>
                    <Image src={'/assets/logo/logo.svg'} width={'165px'} height={'25px'} alt="logo" />
                </NextLink>
                <Stack direction={'row'} spacing={{ base: 0, md: 6 }} fontSize={'xs'}>
                    <Stack direction={'row'} spacing={6} display={{ base: 'none', md: 'initial' }}>
                        <NextLink href={'/docs/tutorial'} passHref>
                            <Link>{message.tutorial}</Link>
                        </NextLink>
                        <NextLink href={'/docs/faq'} passHref>
                            <Link>{message.faq}</Link>
                        </NextLink>
                        <NextLink href={'/pricing'} passHref>
                            <Link>{message.pricing}</Link>
                        </NextLink>
                    </Stack>
                    <Stack direction={'row'} spacing={6}>
                        <NextLink href={'/docs/terms-of-use'} passHref>
                            <Link>{message.terms}</Link>
                        </NextLink>
                        <NextLink href={'/docs/privacy-policy'} passHref>
                            <Link>{message.privacy}</Link>
                        </NextLink>
                        {locale === 'ja' ? (
                            <NextLink href={'/docs/specified-commercial-transactions-act'} passHref>
                                <Link>特定商取引法表示</Link>
                            </NextLink>
                        ) : undefined}
                        <NextLink href={'/docs/trademarks'} passHref>
                            <Link>{message.trademarks}</Link>
                        </NextLink>
                    </Stack>
                </Stack>
            </Container>

            <Box borderTopWidth={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center' }}
                    align={{ base: 'center' }}
                >
                    <Text fontSize={'sm'} textAlign={'center'}>
                        © 2022 EmoGuard. All rights reserved
                    </Text>
                </Container>
            </Box>
        </Box>
    )
}
