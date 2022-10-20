import { ReactNode } from 'react'
import {
    Box,
    Stack,
    HStack,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    Divider,
} from '@chakra-ui/react'
import { FaCheckCircle } from 'react-icons/fa'
import { AppStoreBadge } from './app-store-badge'
import { AddToChromeButton } from './add-to-chrome-button'
import { IconChrome, IconSafari } from './icon-browsers'
import { MacAppStoreBadge } from './mac-app-store-badge'
import { useTranslation } from 'next-i18next'

function PriceWrapper({ children }: { children: ReactNode }) {
    return (
        <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={{ base: 'center', md: 'flex-start' }}
            borderColor={useColorModeValue('gray.200', 'gray.500')}
            borderRadius={'xl'}
        >
            {children}
        </Box>
    )
}

export function ThreeTierPricing() {
    const { t } = useTranslation('common')

    return (
        <Box pt={12}>
            <VStack spacing={2} textAlign="center">
                <Heading as="h1" fontSize="4xl">
                    {t('planPrimary')}
                </Heading>
                <Text fontSize="lg" color={'gray.500'}>
                    {t('planSecondary')}
                </Text>
            </VStack>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 10 }}
                pt={10}
            >
                <PriceWrapper>
                    <Box py={4} px={12}>
                        <Text fontWeight="500" fontSize="2xl">
                            {t('desktop')}
                        </Text>
                        <HStack justifyContent="center">
                            <Text fontSize="5xl" fontWeight="900">
                                {t('desktopPrice')}
                            </Text>
                        </HStack>
                        <Stack spacing={3} direction={'row'} justifyContent="center" mt={2}>
                            <IconChrome />
                            <HStack>
                                <Divider orientation="vertical" />
                            </HStack>
                            <IconSafari />
                        </Stack>
                    </Box>
                    <VStack
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        py={4}
                        borderBottomRadius={'xl'}
                    >
                        <List spacing={3} textAlign="start" px={12}>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                {t('desktopPricingPrimary')}
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                {t('pricingSecondary')}
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                {t('pricingTertiary')}
                            </ListItem>
                        </List>
                        <Box pt={3} pb={1}>
                            <Stack spacing={5} direction={'row'}>
                                <Box>
                                    <AddToChromeButton lineHeight={10} />
                                </Box>
                                <Box>
                                    <MacAppStoreBadge />
                                </Box>
                            </Stack>
                        </Box>
                    </VStack>
                </PriceWrapper>
                <PriceWrapper>
                    <Box position="relative">
                        <Box
                            position="absolute"
                            top="-16px"
                            left="50%"
                            style={{ transform: 'translate(-50%)' }}
                        >
                            <Text
                                textTransform="uppercase"
                                bg={useColorModeValue('red.300', 'red.700')}
                                px={3}
                                py={1}
                                color={useColorModeValue('gray.900', 'gray.300')}
                                fontSize="sm"
                                fontWeight="600"
                                rounded="xl"
                            >
                                {t('lifetime')}
                            </Text>
                        </Box>
                        <Box py={4} px={12}>
                            <Text fontWeight="500" fontSize="2xl">
                                {t('mobile')}
                            </Text>
                            <HStack justifyContent="center">
                                <Text fontSize="3xl" fontWeight="600">
                                    {t('currencySymbol')}
                                </Text>
                                <Text fontSize="5xl" fontWeight="900">
                                    {t('mobilePrice')}
                                </Text>
                            </HStack>
                            <Stack spacing={3} direction={'row'} justifyContent="center" mt={2}>
                                <IconSafari />
                            </Stack>
                        </Box>
                        <VStack
                            bg={useColorModeValue('gray.50', 'gray.700')}
                            py={4}
                            borderBottomRadius={'xl'}
                        >
                            <List spacing={3} textAlign="start" px={12}>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    {t('mobilePricingPrimary')}
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    {t('pricingSecondary')}
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    {t('pricingTertiary')}
                                </ListItem>
                            </List>
                            <Box pt={3} pb={1} textAlign={'center'}>
                                <AppStoreBadge />
                            </Box>
                        </VStack>
                    </Box>
                </PriceWrapper>
            </Stack>
        </Box>
    )
}
