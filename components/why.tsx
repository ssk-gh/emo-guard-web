import { Flex, Container, Heading, Stack, Text, Icon, Box, SimpleGrid } from '@chakra-ui/react'
import { FcLike, FcIdea, FcElectricity } from 'react-icons/fc'
import { ReactElement } from 'react'
import { useTranslation } from 'next-i18next'

export function Why() {
    const { t } = useTranslation('common')

    return (
        <Container maxW={'5xl'}>
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
            >
                <Heading
                    fontWeight={600}
                    fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
                    lineHeight={'110%'}
                    whiteSpace={'pre-wrap'}
                >
                    {t('reasonPrimary')}
                </Heading>
                <Text color={'gray.500'} maxW={'3xl'} whiteSpace={'pre-wrap'}>
                    {t('reasonSecondary')}
                </Text>
                <Reason />
            </Stack>
        </Container>
    )
}

interface FeatureProps {
    title: string
    text: string
    icon: ReactElement
}

const Feature = ({ title, text, icon }: FeatureProps) => {
    return (
        <Stack>
            <Flex
                w={16}
                h={16}
                align={'center'}
                alignSelf={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'gray.100'}
                mb={1}
            >
                {icon}
            </Flex>
            <Text fontWeight={600}>{title}</Text>
            <Text color={'gray.600'}>{text}</Text>
        </Stack>
    )
}

function Reason() {
    const { t } = useTranslation('common')

    return (
        <Box p={4}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <Feature
                    icon={<Icon as={FcLike} w={10} h={10} />}
                    title={t('reason1Title')}
                    text={t('reason1Content')}
                />
                <Feature
                    icon={<Icon as={FcElectricity} w={10} h={10} />}
                    title={t('reason2Title')}
                    text={t('reason2Content')}
                />
                <Feature
                    icon={<Icon as={FcIdea} w={10} h={10} />}
                    title={t('reason3Title')}
                    text={t('reason3Content')}
                />
            </SimpleGrid>
        </Box>
    )
}
