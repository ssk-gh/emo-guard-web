import { AppProps } from 'next/app'
import '../styles/index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { appWithTranslation } from 'next-i18next'

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

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={extendedTheme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default appWithTranslation(MyApp)
