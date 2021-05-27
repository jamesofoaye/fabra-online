import {
    Box, Flex, Text, IconButton, Button,
    Stack, Collapse, Link, Image, useDisclosure,
} from '@chakra-ui/react';
import {
    HamburgerIcon, CloseIcon, AddIcon
} from '@chakra-ui/icons';

const nav_items = [
    {
        label: 'Sign Up',
        href: '/sign-up',
    },
    {
        label: 'Sign In',
        href: '/sign-in',
    },
];

export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box>
            <Flex
                bgGradient="linear(to-r,brand.100,brand.200,brand.100)"
                pos="fixed"
                width="full"
                color={'white'}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                align={'center'}>
                <Flex
                    flex={{ base: 0, md: 'auto' }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon variant={'ghost'} w={3} h={3} /> : <HamburgerIcon variant={'ghost'} w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Image
                        width={{ base: "110px", md: "170px" }}
                        display={{ base: 'none', md: 'flex' }}
                        src="/images/logo.svg"
                        alt="Fabra Online Logo"
                    />
                    <Text fontSize={"lg"}
                        display={{ base: 'center', md: 'none' }}>
                        Fabra Online
                    </Text>

                </Flex>

                <Stack
                    color={'white'}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <Button
                        as={'a'}
                        fontSize={'md'}
                        fontWeight={600}
                        bgGradient="linear(to-r,brand.200,brand.100)"
                        _hover={{
                            bg: "brand.200"
                        }}
                        href={'/post-ad'}
                        leftIcon={<AddIcon />}>
                        Post Ad
                    </Button>
                    <Button
                        as={'a'}
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'md'}
                        fontWeight={600}
                        bg={'brand.100'}
                        variant={'outline'}
                        borderColor={'brand.200'}
                        href={'/sign-in'}
                        _hover={{
                            bg: "brand.200"
                        }}
                    >
                        Sign In
                    </Button>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const MobileNav = () => {
    return (
        <Stack
            mt={12}
            bgGradient="linear(to-r,brand.200,brand.100)"
            p={4}
            display={{ md: 'none' }}>
            {nav_items.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={'white'}>
                    {label}
                </Text>
            </Flex>
        </Stack>
    );
};