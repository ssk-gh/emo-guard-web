import React, { ReactNode } from 'react'
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
    Grid,
    GridItem,
    DrawerOverlay,
} from '@chakra-ui/react'
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings } from 'react-icons/fi'
import { IconType } from 'react-icons'
import { ReactText } from 'react'
import PostType from '../interfaces/post'
import { ArrowUpDownIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

interface LinkItemProps {
    name: string
    icon: IconType
}

interface SidebarProps {
    children: ReactNode
    allPosts: PostType[]
}

export function Sidebar(props: SidebarProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box minH="100vh" bg={'gray.100'}>
            <Grid templateAreas={`"nav main"`}>
                <GridItem area={'nav'}>
                    <SidebarContent
                        allPosts={props.allPosts}
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
                            <SidebarContent allPosts={props.allPosts} onClose={onClose} />
                        </DrawerContent>
                    </Drawer>
                    {/* mobilenav */}
                    <MobileNav onOpen={onOpen} />
                </GridItem>
                <GridItem area={'main'}>{props.children}</GridItem>
            </Grid>
        </Box>
    )
}

interface SidebarContentProps extends BoxProps {
    allPosts: PostType[]
    onClose: () => void
}

const SidebarContent = ({ allPosts, onClose, ...rest }: SidebarContentProps) => {
    return (
        <Box
            bg={'white'}
            w={{ base: 'full', md: 60 }}
            mt={{ base: 0, md: 6 }}
            rounded={'2xl'}
            ml={{ base: 0, md: 6 }}
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
            {allPosts.map((post) => (
                <NavItem key={post.slug} slug={post.slug}>
                    {post.title}
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
        <NextLink href={`/docs/${slug}`} passHref>
            <Link style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
                <Flex
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

interface MobileProps extends FlexProps {
    onOpen: () => void
}

const MobileNav = ({ onOpen }: MobileProps) => {
    return (
        <IconButton
            display={{ base: 'flex', md: 'none' }}
            className="floating-button"
            onClick={onOpen}
            aria-label="open menu"
            icon={<ArrowUpDownIcon />}
            colorScheme="purple"
            boxShadow={'xl'}
        />
    )
}
