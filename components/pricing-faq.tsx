import { Box, Container, Heading, SimpleGrid, Icon, Text, Stack, HStack, VStack } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { useLocale } from '../lib/use-locale'

const getFeatures = (locale: string) => {
    switch (locale) {
        case 'ja':
            return [
                {
                    id: 1,
                    title: 'HTML や CSS セレクターの知識がなくても拡張機能を使うことはできますか？',
                    text: '特別な知識がなくても基本的なキーワードブロック機能を使うことができます。',
                },
                {
                    id: 2,
                    title: 'モバイル版を購入すればiOSとiPadOSの両方で使えるようになりますか？',
                    text: 'はい、両方で使えるようになります。',
                },
                {
                    id: 3,
                    title: 'モバイル版は月額課金ですか？',
                    text: '永久ライセンスでの提供となります。買い切り型のため、月々の料金が発生することはありません。',
                },
                {
                    id: 4,
                    title: 'Android版は存在しますか？',
                    text: 'Android版のChromeではブラウザ拡張機能を利用できないため、Android版はサポートしていません。',
                },
            ]
        default:
            return [
                {
                    id: 1,
                    title: 'Can I use the extension without any knowledge of HTML or CSS selectors?',
                    text: 'Basic keyword blocking features can be used without special knowledge.',
                },
                {
                    id: 2,
                    title: 'If I purchase the mobile version, will it work on both iOS and iPadOS?',
                    text: 'Yes, it will work on both.',
                },
                {
                    id: 3,
                    title: 'Is the mobile version a subscription?',
                    text: 'It is offered on a Lifetime Plan. There are no monthly fees.',
                },
                {
                    id: 4,
                    title: 'Does an Android version exist?',
                    text: 'The Android version is not supported.',
                },
            ]
    }
}

export function PricingFaq() {
    const { locale, message } = useLocale()
    const features = getFeatures(locale)

    return (
        <Box p={4} mt={3} pt={6} pb={8} bg={'gray.100'}>
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={'3xl'}>{message.faq}</Heading>
            </Stack>

            <Container maxW={'6xl'} mt={8}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
                    {features.map((feature) => (
                        <HStack key={feature.id} align={'top'}>
                            <Box color={'green.400'} px={2}>
                                <Icon as={CheckIcon} />
                            </Box>
                            <VStack align={'start'}>
                                <Text fontWeight={600}>{feature.title}</Text>
                                <Text color={'gray.600'}>{feature.text}</Text>
                            </VStack>
                        </HStack>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    )
}
