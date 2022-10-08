import { ReactNode } from 'react'
import { Stack, Container, Box, Text, Heading, SimpleGrid, BoxProps } from '@chakra-ui/react'
import { BrowserSupport } from './browser-support'
import { useTranslation } from 'next-i18next'
import { useLanguage } from '../lib/use-language'

export function What() {
    const { t } = useTranslation('common')

    return (
        <Box bg={'purple.400'} position={'relative'} p={3}>
            <Container maxW={{ base: '7xl', xl: '8xl' }} zIndex={10} position={'relative'}>
                <Stack direction={{ base: 'column', xl: 'row' }}>
                    <Stack
                        flex={3}
                        color={'gray.400'}
                        justify={{ xl: 'center' }}
                        pt={{ base: 4, md: 20, xl: 28 }}
                    >
                        <Box mb={{ base: 10, xl: 20 }} textAlign={'center'}>
                            <Heading color={'white'} mb={5} fontSize={{ base: '3xl', md: '5xl' }}>
                                {t('featurePrimary')}
                            </Heading>
                            <Text fontSize={'xl'} color={'gray.200'}>
                                {t('featureSecondary')}
                            </Text>
                        </Box>
                        <Box display={{ xl: 'none' }} alignSelf={'center'} pb={10}>
                            <Demo />
                        </Box>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                            <Features />
                        </SimpleGrid>
                    </Stack>
                    <Box
                        flex={4}
                        display={{ base: 'none', xl: 'initial' }}
                        pt={{ base: 4, md: 20, xl: 28 }}
                        alignSelf={'center'}
                    >
                        <Demo ml={{ md: 20 }} />
                    </Box>
                </Stack>
                <BrowserSupport />
            </Container>
        </Box>
    )
}

function Demo(props: BoxProps) {
    const language = useLanguage()
    const getDemoSource = () => {
        switch (language) {
            case 'ja':
                return '/assets/home/emoguard_demo_ja.mp4'
            default:
                return '/assets/home/emoguard_demo_en.mp4'
        }
    }
    return (
        <Box
            maxW={'3xl'}
            boxShadow={'lg'}
            rounded={'2xl'}
            p={5}
            bg={'white'}
            border={'1px'}
            borderColor={'gray.200'}
            {...props}
        >
            <video src={getDemoSource()} autoPlay muted loop style={{ borderRadius: '1rem' }} />
        </Box>
    )
}

const StatsText = ({ children }: { children: ReactNode }) => (
    <Text as={'span'} fontWeight={700} color={'white'}>
        {children}
    </Text>
)

function Features() {
    const { t } = useTranslation('common')
    const features = [
        {
            title: t('feature1Title'),
            content: (
                <>
                    <StatsText>{t('feature1ContentHead')}</StatsText>
                    {t('feature1ContentMain')}
                </>
            ),
        },
        {
            title: t('feature2Title'),
            content: (
                <>
                    <StatsText>{t('feature2ContentHead')}</StatsText>
                    {t('feature2ContentMain')}
                </>
            ),
        },
        {
            title: t('feature3Title'),
            content: (
                <>
                    <StatsText>{t('feature3ContentHead')}</StatsText>
                    {t('feature3ContentMain')}
                </>
            ),
        },
        {
            title: t('feature4Title'),
            content: (
                <>
                    <StatsText>{t('feature4ContentHead')}</StatsText>
                    {t('feature4ContentMain')}
                </>
            ),
        },
    ]

    return (
        <>
            {features.map((feature) => (
                <Box key={feature.title}>
                    <Text fontFamily={'heading'} fontSize={'3xl'} color={'white'} mb={3}>
                        {feature.title}
                    </Text>
                    <Text fontSize={'xl'} color={'gray.200'}>
                        {feature.content}
                    </Text>
                </Box>
            ))}
        </>
    )
}
