import { AppProps } from 'next/app'
import '../styles/index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

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
    return (
        <ChakraProvider theme={extendedTheme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}
