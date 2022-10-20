import { Button, ButtonProps } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { FaChrome } from 'react-icons/fa'

export function AddToChromeButton(props?: ButtonProps) {
    const { t } = useTranslation('common')

    return (
        <Button
            onClick={() =>
                window.open(
                    'https://chrome.google.com/webstore/detail/emoguard-keyword-blocker/jgjkefnbeaoejcbpfggcggicconjfldd',
                    '_blank',
                    'noopener'
                )
            }
            leftIcon={<FaChrome />}
            rounded={'full'}
            px={6}
            colorScheme={'purple'}
            bg={'purple.400'}
            _hover={{ bg: 'purple.500' }}
            {...props}
        >
            {t('addToChrome')}
        </Button>
    )
}
