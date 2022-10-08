import { Box, Stack } from '@chakra-ui/react'
import { BlogPostWithImage, Sidebar } from '../../components/demo-components'
import { getStaticPaths, makeStaticProps } from '../../lib/get-static'
import { useLanguage } from '../../lib/use-language'

const getMessages = (locale: string) => {
    switch (locale) {
        case 'ja':
            return [
                {
                    image: '/assets/demo/cat.jpg',
                    title: 'ネコと仲直りする方法',
                    content:
                        '大好きなネコと、時には喧嘩してしまうことも…。この記事で紹介するたった3つのステップでネコと和解しましょう。',
                },
                {
                    image: '/assets/demo/resilience.jpg',
                    title: '心のレジリエンスを高める',
                    content:
                        '長い人生の旅路では困難な状況に遭遇することもあります。心のしなやかさを保つにはどうすればいいでしょうか？',
                },
                {
                    image: '/assets/demo/universe.jpg',
                    title: '宇宙の始まりと私たち',
                    content:
                        '今から約138億年、宇宙はビックバンによって誕生したとされています。私たちの存在の根源を探究する科学の歩みに迫ります。',
                },
                {
                    image: '/assets/demo/corruption.jpg',
                    title: 'またラブ・ダーティワーク社が汚職',
                    content:
                        'ラブ・ダーティワーク社がまたしても事件を起こしました。株主や顧客からの反発は強く、今度こそ倒産への道を突き進んでいるように見えます。',
                },
                {
                    image: '/assets/demo/horror.jpg',
                    title: 'ホラー映画の怖いシーン集めてみた',
                    content:
                        'ホラー映画好きな皆さんにお待ちかねの人気企画、今月もやってきました。トラウマになること間違いなし！',
                },
                {
                    image: '/assets/demo/fire.jpg',
                    title: '有名YouTuberのエン・ジョーが炎上',
                    content:
                        '有名YouTuberのエン・ジョーが投稿した動画がSNSで非難を浴びています。近年インフルエンサーの過激な行動や言動が加速しており問題視されています。',
                },
            ]
        default:
            return [
                {
                    image: '/assets/demo/cat.jpg',
                    title: 'How to make up with a cat',
                    content:
                        'Even our favorite cats sometimes fight with us... Reconcile with your cat in just three steps outlined in this article.',
                },
                {
                    image: '/assets/demo/resilience.jpg',
                    title: 'Increase mental resilience',
                    content:
                        'In the long journey of life, we may encounter difficult situations. How can we keep our minds supple?',
                },
                {
                    image: '/assets/demo/universe.jpg',
                    title: 'The Beginning of the Universe and Us',
                    content:
                        'About 13.8 billion years from now, the universe is believed to have been created by the Big Bang. We will take a closer look at the roots of our existence.',
                },
                {
                    image: '/assets/demo/corruption.jpg',
                    title: 'Corruption again at Love Dirty Work, Inc.',
                    content:
                        'Love Dirty Work, Inc. has been on the case again. This time the company appears to be heading down the road to bankruptcy.',
                },
                {
                    image: '/assets/demo/horror.jpg',
                    title: 'Collection of scary scenes from horror movies',
                    content:
                        "Here it is again this month, the popular program awaited by all horror movie lovers. It's sure to be traumatic!",
                },
                {
                    image: '/assets/demo/fire.jpg',
                    title: 'Famous YouTuber En Joe on Fire',
                    content:
                        'A video posted by famous YouTuber En Joe has been condemned on SNS. The extreme behavior and words and deeds of influencers have accelerated in recent years and are considered problematic.',
                },
            ]
    }
}

export default function Demo() {
    const language = useLanguage()
    const messages = getMessages(language)
    const height = language === 'ja' ? '420px' : '420px'

    return (
        <Sidebar titles={messages.map((message) => message.title)}>
            <Box pr={{ base: 3, md: 6 }} pl={{ base: 3 }}>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    justify={'center'}
                    spacing={{ base: -6, sm: 6 }}
                >
                    <BlogPostWithImage
                        image={messages[0].image}
                        title={messages[0].title}
                        content={messages[0].content}
                        height={height}
                    />
                    <BlogPostWithImage
                        image={messages[1].image}
                        title={messages[1].title}
                        content={messages[1].content}
                        height={height}
                    />
                    <BlogPostWithImage
                        image={messages[2].image}
                        title={messages[2].title}
                        content={messages[2].content}
                        height={height}
                    />
                </Stack>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    justify={'center'}
                    spacing={{ base: -6, sm: 6 }}
                >
                    <BlogPostWithImage
                        image={messages[3].image}
                        title={messages[3].title}
                        content={messages[3].content}
                        height={height}
                    />
                    <BlogPostWithImage
                        image={messages[4].image}
                        title={messages[4].title}
                        content={messages[4].content}
                        height={height}
                    />
                    <BlogPostWithImage
                        image={messages[5].image}
                        title={messages[5].title}
                        content={messages[5].content}
                        height={height}
                    />
                </Stack>
            </Box>
        </Sidebar>
    )
}

const getStaticProps = makeStaticProps()
export { getStaticPaths, getStaticProps }
