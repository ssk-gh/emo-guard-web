import { ReactNode } from 'react'
import { Stack, Container, Box, Text, Heading, SimpleGrid, BoxProps } from '@chakra-ui/react'
import { useLocale } from '../lib/use-locale'
import { BrowserSupport } from './browser-support'

export function What() {
    const { message } = useLocale()

    return (
        <Box bg={'purple.400'} position={'relative'} p={3}>
            <Container maxW={{ base: '7xl', xl: '8xl' }} zIndex={10} position={'relative'}>
                <Stack direction={{ base: 'column', xl: 'row' }}>
                    <Stack flex={3} color={'gray.400'} justify={{ xl: 'center' }} pt={{ base: 4, md: 20, xl: 28 }}>
                        <Box mb={{ base: 10, xl: 20 }} textAlign={'center'}>
                            <Heading color={'white'} mb={5} fontSize={{ base: '3xl', md: '5xl' }}>
                                {message.featurePrimary}
                            </Heading>
                            <Text fontSize={'xl'} color={'gray.200'}>
                                {message.featureSecondary}
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
    const { locale } = useLocale()
    const getDemoSource = () => {
        switch (locale) {
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
    const { message } = useLocale()
    const features = [
        {
            title: message.feature1Title,
            content: (
                <>
                    <StatsText>{message.feature1ContentHead}</StatsText>
                    {message.feature1ContentMain}
                </>
            ),
        },
        {
            title: message.feature2Title,
            content: (
                <>
                    <StatsText>{message.feature2ContentHead}</StatsText>
                    {message.feature2ContentMain}
                </>
            ),
        },
        {
            title: message.feature3Title,
            content: (
                <>
                    <StatsText>{message.feature3ContentHead}</StatsText>
                    {message.feature3ContentMain}
                </>
            ),
        },
        {
            title: message.feature4Title,
            content: (
                <>
                    <StatsText>{message.feature4ContentHead}</StatsText>
                    {message.feature4ContentMain}
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
