import { Box, Center, Heading, Image, Text } from '@chakra-ui/react'
import { UniversalLink } from '../components/universal-link'
import { useLanguage } from '../lib/use-language'

export default function NotFound() {
    const language = useLanguage()
    const message = (() => {
        switch (language) {
            case 'ja':
                return 'お探しのページは見つかりませんでした。'
            default:
                return "The page you're looking for does not seem to exist"
        }
    })()
    return (
        <Box textAlign="center" py={10} px={6}>
            <Center mb={10}>
                <UniversalLink href={'/'}>
                    <Image
                        src={'/assets/logo/logo.svg'}
                        width={'198px'}
                        height={'30px'}
                        alt="logo"
                    />
                </UniversalLink>
            </Center>
            <Heading
                display="inline-block"
                as="h2"
                size="2xl"
                bgGradient="linear(to-r, purple.400, purple.600)"
                backgroundClip="text"
            >
                404
            </Heading>
            <Text fontSize="18px" mt={3} mb={6}>
                Page Not Found
            </Text>
            <Text color={'gray.500'} suppressHydrationWarning>
                {message}
            </Text>
        </Box>
    )
}
