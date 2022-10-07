import { Box, Container, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { UniversalLink } from './universal-link'
import { useLanguage } from '../lib/use-language'

export function Footer() {
    const { t } = useTranslation('common')
    const language = useLanguage()

    return (
        <Box
            as={'footer'}
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
        >
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                spacing={4}
                justify={'center'}
                align={'center'}
            >
                <UniversalLink href={'/'}>
                    <Image
                        src={'/assets/logo/logo.svg'}
                        width={'165px'}
                        height={'25px'}
                        alt="logo"
                    />
                </UniversalLink>
                <Stack direction={'row'} spacing={{ base: 0, md: 6 }} fontSize={'xs'}>
                    <Stack direction={'row'} spacing={6} display={{ base: 'none', md: 'initial' }}>
                        <UniversalLink href="/docs/tutorial">{t('tutorial')}</UniversalLink>
                        <UniversalLink href="/docs/faq">{t('faq')}</UniversalLink>
                        <UniversalLink href="/pricing">{t('pricing')}</UniversalLink>
                    </Stack>
                    <Stack direction={'row'} spacing={6}>
                        <UniversalLink href="/docs/terms-of-use">{t('terms')}</UniversalLink>
                        <UniversalLink href="/docs/privacy-policy">{t('privacy')}</UniversalLink>
                        {language === 'ja' ? (
                            <UniversalLink href="/docs/specified-commercial-transactions-act">
                                特定商取引法表示
                            </UniversalLink>
                        ) : undefined}
                        <UniversalLink href="/docs/trademarks">{t('trademarks')}</UniversalLink>
                    </Stack>
                </Stack>
            </Container>

            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
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
