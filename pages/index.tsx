import Layout from '../components/layout'
import Head from 'next/head'
import { CallToAction } from '../components/call-to-action'
import { What } from '../components/what'
import { Why } from '../components/why'
import { useLocale } from '../lib/use-locale'

export default function Index() {
    const { message } = useLocale()

    return (
        <>
            <Layout>
                <Head>
                    <title>EmoGuard - {message.ctaSecondary} | EmoGuard</title>
                </Head>
                <CallToAction />
                <What />
                <Why />
            </Layout>
        </>
    )
}
