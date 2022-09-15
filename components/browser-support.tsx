import { TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, HStack, Text } from '@chakra-ui/react'
import { FaChrome, FaSafari } from 'react-icons/fa'
import { useLocale } from '../lib/use-locale'

export function BrowserSupport() {
    const { message } = useLocale()

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
                    {message.browserSupport}
                </TableCaption>
                <Thead>
                    <Tr color={'white'}>
                        <Th color={'inherit'} textTransform={'none'}>
                            {message.browser}
                        </Th>
                        <Th color={'inherit'} textTransform={'none'}>
                            Windows
                        </Th>
                        <Th color={'inherit'} textTransform={'none'}>
                            Mac
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
                        <Td>{message.supported}</Td>
                        <Td>{message.supported}</Td>
                        <Td>{message.supported}</Td>
                        <Td>{message.notSupported}</Td>
                        <Td>{message.notSupported}</Td>
                    </Tr>
                    <Tr>
                        <Td>
                            <HStack>
                                <FaSafari color={'white'} />
                                <Text>Safari</Text>
                            </HStack>
                        </Td>
                        <Td>{message.notSupported}</Td>
                        <Td>{message.supported}</Td>
                        <Td>{message.notSupported}</Td>
                        <Td>{message.supported}</Td>
                        <Td>{message.notSupported}</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )
}
