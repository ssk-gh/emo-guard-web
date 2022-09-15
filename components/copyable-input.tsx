import { useClipboard, Flex, Input, Button, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import { useLocale } from '../lib/use-locale'

interface CopyableInputProps {
    value: string
    placeholder: string
}

export function CopyableInput(props: CopyableInputProps) {
    const { hasCopied, onCopy } = useClipboard(props.value)
    const { message } = useLocale()

    return (
        <>
            <Flex mb={2}>
                <InputGroup>
                    <InputLeftAddon>{props.placeholder}</InputLeftAddon>
                    <Input value={props.value} variant={'outline'} isReadOnly placeholder={props.placeholder} />
                </InputGroup>
                <Button onClick={onCopy} ml={2}>
                    {hasCopied ? message.copied : message.copy}
                </Button>
            </Flex>
        </>
    )
}
