import { Text } from '@chakra-ui/react'

export function Developer() {
    return (
        <Text my={5} lineHeight={1.625}>
            {process.env.NEXT_PUBLIC_DEVELOPER_NAME}
        </Text>
    )
}
