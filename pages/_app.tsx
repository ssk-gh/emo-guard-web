import { AppProps } from 'next/app'
import '../styles/index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { GoogleAnalytics } from '../components/google-analytics'
import { usePageView } from '../lib/use-page-view'

const theme = {
    styles: {
        global: {
            '.markdown': {
                '.chakra-alert': {
                    p: {
                        my: 0,
                    },
                },
            },
        },
    },
}

const extendedTheme = extendTheme(theme)

export default function MyApp({ Component, pageProps }: AppProps) {
    usePageView()

    return (
        <>
            <GoogleAnalytics />
            <ChakraProvider theme={extendedTheme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    )
}
