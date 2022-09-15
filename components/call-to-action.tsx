import { Flex, Container, Heading, Stack, Text, Button, Box, Divider, HStack } from '@chakra-ui/react'
import { AppStoreBadge } from './app-store-badge'
import { FaChrome } from 'react-icons/fa'
import { useLocale } from '../lib/use-locale'
import { IconChrome, IconSafari } from './icon-browsers'
import { MacAppStoreBadge } from './mac-app-store-badge'

export function CallToAction() {
    const { locale, message } = useLocale()

    const getDemoSource = () => {
        switch (locale) {
            case 'ja':
                return '/assets/home/emoguard_demo_ja.mp4'
            default:
                return '/assets/home/emoguard_demo_en.mp4'
        }
    }

    const getCtaMessage = () => {
        switch (locale) {
            case 'ja':
                return (
                    <>
                        {message.ctaPrimary}
                        <br />
                        <Text as={'span'} color={'purple.400'}>
                            {message.ctaPrimaryColored}
                        </Text>
                    </>
                )
            default:
                return (
                    <>
                        <Text as={'span'} color={'purple.400'}>
                            {message.ctaPrimaryColored}
                        </Text>
                        <br />
                        {message.ctaPrimary}
                    </>
                )
        }
    }

    return (
        <Container maxW={'5xl'}>
            <Stack textAlign={'center'} align={'center'} spacing={{ base: 8, md: 10 }} py={{ base: 10 }}>
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                    lineHeight={'110%'}
                    whiteSpace={'pre-wrap'}
                >
                    {getCtaMessage()}
                </Heading>
                <Text fontSize={'lg'} color={'gray.500'} maxW={'3xl'} whiteSpace={'pre-wrap'}>
                    {message.ctaSecondary}
                </Text>
                <Stack spacing={{ base: 3, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
                    <Box>
                        <Button
                            leftIcon={<FaChrome />}
                            rounded={'full'}
                            px={6}
                            colorScheme={'purple'}
                            bg={'purple.400'}
                            _hover={{ bg: 'purple.500' }}
                        >
                            {message.addToChrome}
                        </Button>
                    </Box>
                    <HStack spacing={{ base: 2, md: 6 }}>
                        <MacAppStoreBadge />
                        <AppStoreBadge />
                    </HStack>
                </Stack>
                <Flex w={'full'}>
                    <Box
                        maxW={'3xl'}
                        boxShadow={'lg'}
                        rounded={'2xl'}
                        mx={{ base: 0, md: 20 }}
                        p={5}
                        bg={'white'}
                        border={'1px'}
                        borderColor={'gray.200'}
                    >
                        <video src={getDemoSource()} autoPlay muted loop style={{ borderRadius: '1rem' }} />
                    </Box>
                </Flex>
                <Stack spacing={3} direction={'row'} justifyContent={'center'}>
                    <Text color={'gray.400'}>{message.availableIn}</Text>
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
