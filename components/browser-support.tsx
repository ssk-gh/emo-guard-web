import { TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, HStack, Text } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { FaChrome, FaSafari } from 'react-icons/fa'

export function BrowserSupport() {
    const { t } = useTranslation('common')

    return (
        <TableContainer
            border={'1px'}
            borderColor={'purple.100'}
            rounded={'2xl'}
            mx={{ base: 0, md: 10, xl: 40 }}
            mb={{ base: 4, md: 20, xl: 28 }}
            mt={{ base: 12, xl: 20 }}
        >
            <Table variant="simple" color={'white'}>
                <TableCaption color={'white'} my={2}>
                    {t('browserSupport')}
                </TableCaption>
                <Thead>
                    <Tr color={'white'}>
                        <Th color={'inherit'} textTransform={'none'}>
                            {t('browser')}
                        </Th>
                        <Th color={'inherit'} textTransform={'none'}>
                            Windows
                        </Th>
                        <Th color={'inherit'} textTransform={'none'}>
                            macOS
                        </Th>
                        <Th color={'inherit'} textTransform={'none'}>
                            Linux
                        </Th>
                        <Th color={'inherit'} textTransform={'none'}>
                            iOS
                        </Th>
                        <Th color={'inherit'} textTransform={'none'}>
                            Android
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>
                            <HStack>
                                <FaChrome color={'white'} />
                                <Text>Chrome</Text>
                            </HStack>
                        </Td>
                        <Td>{t('supported')}</Td>
                        <Td>{t('supported')}</Td>
                        <Td>{t('supported')}</Td>
                        <Td>{t('notSupported')}</Td>
                        <Td>{t('notSupported')}</Td>
                    </Tr>
                    <Tr>
                        <Td>
                            <HStack>
                                <FaSafari color={'white'} />
                                <Text>Safari</Text>
                            </HStack>
                        </Td>
                        <Td>{t('notSupported')}</Td>
                        <Td>{t('supported')}</Td>
                        <Td>{t('notSupported')}</Td>
                        <Td>{t('supported')}</Td>
                        <Td>{t('notSupported')}</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )
}
