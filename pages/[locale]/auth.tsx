import { useRouter } from 'next/router'
import Container from '../../components/container'
import Layout from '../../components/layout'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { CheckCircleIcon, CloseIcon } from '@chakra-ui/icons'
import { CopyableInput } from '../../components/copyable-input'
import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../lib/get-static'

export default function Auth() {
    const router = useRouter()
    const { code } = router.query
    const { t } = useTranslation('common')

    return (
        <Layout>
            <Container>
                {code ? (
                    <Box textAlign="center" py={10} px={6}>
                        <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
                        <Heading as="h2" size="xl" mt={6} mb={3}>
                            {t('authSucceeded')}
                        </Heading>
                        <Text color={'red.400'} mb={12}>
                            {t('authSucceededGuide')}
                        </Text>
                        <CopyableInput value={code.toString()} placeholder={t('authCode')} />
                    </Box>
                ) : (
                    <Box textAlign="center" py={10} px={6}>
                        <Box display="inline-block">
                            <Flex
                                flexDirection="column"
                                justifyContent="center"
                                alignItems="center"
                                bg={'red.500'}
                                rounded={'50px'}
                                w={'55px'}
                                h={'55px'}
                                textAlign="center"
                            >
                                <CloseIcon boxSize={'20px'} color={'white'} />
                            </Flex>
                        </Box>
                        <Heading as="h2" size="xl" mt={6} mb={3}>
                            {t('authFailed')}
                        </Heading>
                        <Text color={'gray.500'}>{t('authFailedGuide')}</Text>
                    </Box>
                )}
            </Container>
        </Layout>
    )
}

const getStaticProps = makeStaticProps()
export { getStaticPaths, getStaticProps }
