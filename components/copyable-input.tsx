import { useClipboard, Flex, Input, Button, InputGroup, InputLeftAddon } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'

interface CopyableInputProps {
    value: string
    placeholder: string
}

export function CopyableInput(props: CopyableInputProps) {
    const { hasCopied, onCopy } = useClipboard(props.value)
    const { t } = useTranslation('common')

    return (
        <>
            <Flex mb={2}>
                <InputGroup>
                    <InputLeftAddon>{props.placeholder}</InputLeftAddon>
                    <Input value={props.value} variant={'outline'} isReadOnly placeholder={props.placeholder} />
                </InputGroup>
                <Button onClick={onCopy} ml={2}>
                    {hasCopied ? t('copied') : t('copy')}
                </Button>
            </Flex>
        </>
    )
}
