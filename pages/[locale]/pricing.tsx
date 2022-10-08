import Head from 'next/head'
import Layout from '../../components/layout'
import { ThreeTierPricing } from '../../components/pricing-compare'
import { PricingFaq } from '../../components/pricing-faq'
import { getStaticPaths, makeStaticProps } from '../../lib/get-static'

export default function Pricing() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Pricing | EmoGuard</title>
                </Head>
                <ThreeTierPricing />
                <PricingFaq />
            </Layout>
        </>
    )
}

const getStaticProps = makeStaticProps()
export { getStaticPaths, getStaticProps }
