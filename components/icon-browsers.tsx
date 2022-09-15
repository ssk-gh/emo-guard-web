import { HStack, Text } from '@chakra-ui/react'
import { FaChrome, FaSafari } from 'react-icons/fa'

export function IconChrome() {
    return (
        <HStack>
            <FaChrome size={20} color={'#A0AEC0'} />
            <Text color={'gray.400'}>Chrome</Text>
        </HStack>
    )
}

export function IconSafari() {
    return (
        <HStack>
            <FaSafari size={20} color={'#A0AEC0'} />
            <Text color={'gray.400'}>Safari</Text>
        </HStack>
    )
}
