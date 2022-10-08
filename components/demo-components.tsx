import NextLink from 'next/link'
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    useColorModeValue,
    BoxProps,
    CloseButton,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    Flex,
    FlexProps,
    Grid,
    GridItem,
    Icon,
    Link,
    useDisclosure,
    Image,
} from '@chakra-ui/react'
import { ReactNode, ReactText } from 'react'
import { IconType } from 'react-icons'

interface BlogPostProps {
    image: string
    title: string
    content: string
    height: string
}

export function BlogPostWithImage({ image, title, content, height }: BlogPostProps) {
    return (
        <Center py={6}>
            <Box
                maxW={'445px'}
                minW={{ md: '445px' }}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}
                height={height}
            >
                <Box
                    h={{ base: '173px', md: '210px' }}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}
                >
                    <Image
                        src={image}
                        minWidth={'100%'}
                        maxWidth={'100%'}
                        minHeight={'100%'}
                        maxHeight={'100%'}
                        alt={title}
                    />
                </Box>
                <Stack className="post">
                    <Text
                        color={'green.500'}
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'sm'}
                        letterSpacing={1.1}
                    >
                        Blog
                    </Text>
                    <Heading
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}
                    >
                        {title}
                    </Heading>
                    <Text color={'gray.500'}>{content}</Text>
                </Stack>
            </Box>
        </Center>
    )
}

interface SidebarProps {
    titles: string[]
    children: ReactNode
}

export function Sidebar(props: SidebarProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box minH="100vh" bg={'gray.100'}>
            <Grid templateAreas={`"nav main"`}>
                <GridItem area={'nav'}>
                    <SidebarContent
                        titles={props.titles}
                        onClose={() => onClose}
                        display={{ base: 'none', md: 'block' }}
                    />
                    <Drawer
                        autoFocus={false}
                        isOpen={isOpen}
                        placement="bottom"
                        onClose={onClose}
                        returnFocusOnClose={false}
                        onOverlayClick={onClose}
                        size="xs"
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <SidebarContent titles={props.titles} onClose={onClose} />
                        </DrawerContent>
                    </Drawer>
                </GridItem>
                <GridItem area={'main'}>{props.children}</GridItem>
            </Grid>
        </Box>
    )
}

interface SidebarContentProps extends BoxProps {
    titles: string[]
    onClose: () => void
}

const SidebarContent = ({ titles, onClose, ...rest }: SidebarContentProps) => {
    return (
        <Box
            bg={'white'}
            w={{ base: 'full', md: 60 }}
            mt={{ base: 0, md: 6 }}
            rounded={'2xl'}
            ml={{ base: 0, md: 8 }}
            py={5}
            boxShadow={{ base: 'none', md: 'md' }}
            {...rest}
        >
            <Flex
                display={{ base: 'flex', md: 'none' }}
                h={20}
                alignItems="center"
                mx="8"
                justifyContent="space-between"
            >
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    Docs
                </Text>
                <CloseButton onClick={onClose} />
            </Flex>
            {titles.map((title) => (
                <NavItem key={title} slug={title}>
                    {title}
                </NavItem>
            ))}
        </Box>
    )
}

interface NavItemProps extends FlexProps {
    icon?: IconType
    slug: string
    children: ReactText
}
const NavItem = ({ icon, slug, children, ...rest }: NavItemProps) => {
    return (
        <NextLink href={`#`} passHref>
            <Link style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
                <Flex
                    className={'post'}
                    align="center"
                    p="4"
                    mx="4"
                    borderRadius="lg"
                    role="group"
                    cursor="pointer"
                    _hover={{
                        bg: 'cyan.400',
                        color: 'white',
                    }}
                    {...rest}
                >
                    {icon && (
                        <Icon
                            mr="4"
                            fontSize="16"
                            _groupHover={{
                                color: 'white',
                            }}
                            as={icon}
                        />
                    )}
                    {children}
                </Flex>
            </Link>
        </NextLink>
    )
}
