import Layout from '../../components/layout'
import Head from 'next/head'
import { CallToAction } from '../../components/call-to-action'
import { What } from '../../components/what'
import { Why } from '../../components/why'
import { Demo } from '../../components/demo'
import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/get-static'

export default function Index() {
    const { t } = useTranslation('common')

    return (
        <>
            <Layout>
                <Head>
                    <title>EmoGuard - {t('ctaSecondary')} | EmoGuard</title>
                </Head>
                <CallToAction />
                <What />
                <Demo />
                <Why />
            </Layout>
        </>
    )
}

const getStaticProps = makeStaticProps()
export { getStaticPaths, getStaticProps }
