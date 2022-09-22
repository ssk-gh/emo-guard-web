import { ArrowForwardIcon } from '@chakra-ui/icons'
import { VStack, Center, IconButton, HStack, Select, Button, Box, Text, BoxProps } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useLocale } from '../lib/use-locale'

export function Demo(props: BoxProps) {
    const { locale, message } = useLocale()
    const comments = [
        {
            comment: message.demoComment1,
            keyword: 'EmoGuard',
        },
        {
            comment: message.demoComment2,
            keyword: message.text,
        },
        {
            comment: message.demoComment3,
            keyword: message.element,
        },
    ]

    const emoGuardian = '😎👍'
    const [hideMode, setHideMode] = useState('text')
    const [comment, setComment] = useState(comments[0].comment)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setComment(comments[index].comment)
    }, [locale])

    const block = () => {
        switch (hideMode) {
            case 'text':
                const regex = new RegExp(comments[index].keyword, 'gi')
                const safeComment = comment.replace(regex, emoGuardian)
                setComment(safeComment)
                break
            case 'element':
                setComment(emoGuardian)
                break
            default:
                break
        }
    }

    const next = () => {
        const nextIndex = (index + 1) % comments.length
        setIndex(nextIndex)
        setComment(comments[nextIndex].comment)
    }

    return (
        <Box bg={'purple.200'} py={{ base: 12, md: 20 }} {...props}>
            <VStack spacing={12}>
                <Box
                    maxW={'3xl'}
                    w={{ base: 'xs', sm: 'md', md: '2xl', lg: '3xl' }}
                    h={'xs'}
                    boxShadow={'xl'}
                    rounded={'3xl'}
                    mx={{ base: 0, md: 20 }}
                    bg={'white'}
                    border={'1px'}
                    borderColor={'gray.200'}
                    pos={'relative'}
                    _after={{
                        content: `""`,
                        w: 0,
                        h: 0,
                        borderLeft: 'solid transparent',
                        borderLeftWidth: 16,
                        borderRight: 'solid transparent',
                        borderRightWidth: 16,
                        borderTop: 'solid',
                        borderTopWidth: 16,
                        borderTopColor: 'white',
                        pos: 'absolute',
                        bottom: '-16px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}
                >
                    <Center h="100%" p={{ base: 10, sm: 20 }}>
                        <Text fontSize={{ base: '2xl', sm: '4xl' }} whiteSpace={'pre-wrap'}>
                            {comment}
                        </Text>
                    </Center>
                    <IconButton
                        aria-label="Reset"
                        icon={<ArrowForwardIcon />}
                        onClick={next}
                        variant="outline"
                        pos={'absolute'}
                        top={'40px'}
                        right={'0px'}
                        transform={'translate(-50%, -50%)'}
                        border={'0px'}
                    />
                </Box>
                <Box>
                    <HStack spacing={3}>
                        <Box bg={'white'} rounded={'md'}>
                            <Select
                                variant="filled"
                                defaultValue={'text'}
                                value={hideMode}
                                onChange={(event) => setHideMode(event.target.value)}
                            >
                                <option value="text">{message.text}</option>
                                <option value="element">{message.element}</option>
                            </Select>
                        </Box>
                        {locale === 'ja' ? <Text>を</Text> : undefined}
                        <Box>
                            <Button colorScheme="pink" onClick={block}>
                                {message.block}
                            </Button>
                        </Box>
                    </HStack>
                </Box>
            </VStack>
        </Box>
    )
}
