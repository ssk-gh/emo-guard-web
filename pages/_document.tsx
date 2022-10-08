import Document, { Html, Head, Main, NextScript } from 'next/document'
import i18nextConfig from '../next-i18next.config'

export default class MyDocument extends Document {
    getLocale() {
        const queryLocale = this.props.__NEXT_DATA__.query.locale
        if (queryLocale) {
            return typeof queryLocale === 'string' ? queryLocale : queryLocale[0]
        }

        return i18nextConfig.i18n.defaultLocale
    }

    render() {
        return (
            <Html lang={this.getLocale()}>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
