import {
    Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Link, Image, Input, Modal, ModalBody,
    Center, ModalCloseButton, ModalContent, ModalOverlay, Stack, Text, Divider, useDisclosure, useToast
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useAuth } from '../lib/auth-context';
import { FaGoogle } from 'react-icons/fa'

const AuthContent = ({ register, errors, type, ...rest }) => {
    const toast = useToast();
    const auth = useAuth();
    const router = useRouter();
    return (
        <>
            <Stack {...rest}>
                <Box as="a" href="/" aria-label="Fabra online, Back to homepage">
                    <Center>
                        <Image
                            width={{ base: "110px", md: "170px" }}
                            src="/images/logo.svg"
                            alt="Fabra Online Logo"
                        />
                    </Center>

                </Box>
                <FormControl isInvalid={errors.email && errors.email.message}>
                    <FormLabel>Email Address</FormLabel>
                    <Input
                        autoFocus
                        aria-label="Email Address"
                        name="email"
                        ref={register({
                            required: 'Please enter your email.'
                        })}
                        placeholder="Please enter your email."
                    />
                    <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.pass && errors.pass.message}>
                    <FormLabel>Password</FormLabel>
                    <Input
                        aria-label="Password"
                        name="pass"
                        type="password"
                        ref={register({
                            required: 'Please enter your password.'
                        })}
                        placeholder="Please enter your password."
                    />
                    <FormErrorMessage>{errors.pass && errors.pass.message}</FormErrorMessage>
                </FormControl>
                <Button type="submit" mt={4} bgGradient="linear(to-r,brand.200,brand.100)"
                    _hover={{ bg: "brand.100" }}
                    color="white"
                    variant="solid">
                    {type}
                </Button>
                <Flex>
                    <Divider py={"6px"} colorScheme={"black"}></Divider>
                    <Text px={2}>OR</Text>
                    <Divider py={"6px"}></Divider>
                </Flex>

                <Button
                    onClick={() => {
                        auth.signinWithGoogle('/test-page').then(() => {
                            router.push('/test-page');
                        }).catch((error) => {
                            toast({
                                title: 'An error occurred.',
                                description: error.message,
                                status: 'error',
                                duration: 9000,
                                isClosable: true
                            });
                        });
                    }}
                    bgGradient="linear(to-r,brand.200,brand.100)"
                    _hover={{ bg: "brand.100" }}
                    color="white"
                    fontWeight="medium"
                    leftIcon={<FaGoogle />}
                    mt={4}
                >
                    Continue With Google
                </Button>
                {
                    type == "Sign In"
                        ?
                        <>
                            <Link href="/forgot-password">Forgot Password?</Link>
                            <Text>Don't have an account? {''}
                                <Link
                                    href="/sign-up"
                                    pl="2"
                                    textDecoration="underline">
                                    Sign Up
                                </Link>
                            </Text>
                        </>
                        : ""
                }
            </Stack>
        </>
    )
};

const FullScreenAuth = ({ type, onSubmit }) => {
    const { handleSubmit, register, errors } = useForm();

    return (
        <Flex align="center" justify="center" h="100vh">
            <AuthContent
                as="form"
                borderRadius={8}
                errors={errors}
                maxWidth="400px"
                onSubmit={handleSubmit((data) => onSubmit(data))}
                px={8}
                py={[null, 12]}
                register={register}
                shadow={[null, 'dark-lg']}
                spacing={3}
                type={type}
                w="100%"
            />
        </Flex>
    );

};

const AuthModal = ({ isOpen, onClose, type, onSubmit }) => {
    const { handleSubmit, register, errors } = useForm();

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="400px">
            <ModalOverlay />
            <ModalContent borderRadius={4}>
                <ModalCloseButton />
                <ModalBody>
                    <Flex align="center" justify="center">
                        <AuthContent
                            as="form"
                            errors={errors}
                            onSubmit={handleSubmit((data) => onSubmit(data))}
                            px={8}
                            py={12}
                            register={register}
                            spacing={3}
                            type={type}
                            w="100%"
                        />
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export const withAuthModal = (Component) => (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    const auth = useAuth();
    const signUp = ({ email, pass }) => {
        auth.signup(email, pass)
            .then(() => {
                toast({
                    title: 'Success!',
                    description: 'Your account has been created.',
                    status: 'success',
                    duration: 3000,
                    isClosable: true
                });
                onClose();
            })
            .catch((error) => {
                toast({
                    title: 'An error occurred.',
                    description: error.message,
                    status: 'error',
                    duration: 9000,
                    isClosable: true
                });
            });
    };
    return (
        <>
            <AuthModal isOpen={isOpen} onClose={onClose} type="Sign Up" onSubmit={signUp} />
            <Component openAuthModal={onOpen} {...props} />
        </>
    );
};

export const withSignInRedirect = (Component) => (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
    const router = useRouter();
    const auth = useAuth();

    const signIn = ({ email, pass }) => {
        auth.signinWithEmail(email, pass)
            .then(() => {
                router.push('/test-page');
            })
            .catch((error) => {
                toast({
                    title: 'An error occurred.',
                    description: error.message,
                    status: 'error',
                    duration: 9000,
                    isClosable: true
                });
            });
    };

    return (
        <>
            <AuthModal isOpen={isOpen} onClose={onClose} type="Sign In" onSubmit={signIn} />
            <Component onSignIn={onOpen} {...props} />
        </>
    );
};

export default FullScreenAuth;