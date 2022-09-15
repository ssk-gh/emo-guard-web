import { Button, ButtonProps } from '@chakra-ui/react'
import { FaChrome } from 'react-icons/fa'
import { useLocale } from '../lib/use-locale'

export function AddToChromeButton(props?: ButtonProps) {
    const { message } = useLocale()

    return (
        <Button
            leftIcon={<FaChrome />}
            rounded={'full'}
            px={6}
            colorScheme={'purple'}
            bg={'purple.400'}
            _hover={{ bg: 'purple.500' }}
            lineHeight={10}
            {...props}
        >
            {message.addToChrome}
        </Button>
    )
}
