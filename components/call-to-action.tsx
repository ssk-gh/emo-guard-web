import { Flex, Container, Heading, Stack, Text, Box, Divider, HStack, Icon } from '@chakra-ui/react'
import { AppStoreBadge } from './app-store-badge'
import { IconChrome, IconSafari } from './icon-browsers'
import { MacAppStoreBadge } from './mac-app-store-badge'
import { TbDeviceMobile, TbDeviceTablet, TbDeviceLaptop, TbDeviceDesktop } from 'react-icons/tb'
import { useTranslation } from 'next-i18next'
import { useLanguage } from '../lib/use-language'
import { AddToChromeButton } from './add-to-chrome-button'

export function CallToAction() {
    const { t } = useTranslation('common')
    const language = useLanguage()

    const getCtaMessage = () => {
        switch (language) {
            case 'ja':
                return (
                    <>
                        {t('ctaPrimary')}
                        <br />
                        <Text as={'span'} color={'purple.400'}>
                            {t('ctaPrimaryColored')}
                        </Text>
                    </>
                )
            default:
                return (
                    <>
                        <Text as={'span'} color={'purple.400'}>
                            {t('ctaPrimaryColored')}
                        </Text>
                        <br />
                        {t('ctaPrimary')}
                    </>
                )
        }
    }

    return (
        <Container maxW={'5xl'}>
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 10 }}
            >
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                    lineHeight={'110%'}
                    whiteSpace={'pre-wrap'}
                >
                    {getCtaMessage()}
                </Heading>
                <Text fontSize={'lg'} color={'gray.500'} maxW={'3xl'} whiteSpace={'pre-wrap'}>
                    {t('ctaSecondary')}
                </Text>
                <Stack spacing={{ base: 3, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
                    <Box>
                        <AddToChromeButton />
                    </Box>
                    <HStack spacing={{ base: 2, md: 6 }}>
                        <MacAppStoreBadge />
                        <AppStoreBadge />
                    </HStack>
                </Stack>
                <Flex w={'full'} justifyContent={'center'}>
                    <Hero />
                </Flex>
                <Stack spacing={3} direction={'row'} justifyContent={'center'}>
                    <Text color={'gray.400'}>{t('availableIn')}</Text>
                    <IconChrome />
                    <HStack>
                        <Divider orientation="vertical" />
                    </HStack>
                    <IconSafari />
                </Stack>
            </Stack>
        </Container>
    )
}

function Hero() {
    const language = useLanguage()
    const src = (() => {
        switch (language) {
            case 'ja':
                return '/assets/home/EmoGuard_capture_target_ja.png'
            default:
                return '/assets/home/EmoGuard_capture_target_en.png'
        }
    })()

    return (
        <Box>
            <HStack>
                <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    marginTop={'auto'}
                    color={'gray.400'}
                >
                    <Icon as={TbDeviceMobile} boxSize={{ base: '4rem', md: '7rem' }} />
                    <Icon as={TbDeviceTablet} boxSize={{ base: '4rem', md: '7rem' }} />
                </Stack>
                <Box boxShadow={'md'}>
                    <img src={src} width={'282px'} height={'399px'} alt={'Hero'} />
                </Box>
                <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    marginTop={'auto !important'}
                    color={'gray.400'}
                >
                    <Icon as={TbDeviceLaptop} boxSize={{ base: '4rem', md: '7rem' }} />
                    <Icon as={TbDeviceDesktop} boxSize={{ base: '4rem', md: '7rem' }} />
                </Stack>
            </HStack>
        </Box>
    )
}
