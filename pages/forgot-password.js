import React, { useState } from 'react';
import {
    Box, Button, FormControl, FormLabel, Image, Input,
    Center, Stack, useToast
} from '@chakra-ui/react';
import { useAuth } from '../lib/auth-context';
import { useRouter } from 'next/router';
import Head from 'next/head';


const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const auth = useAuth();
    const toast = useToast();
    const router = useRouter();

    return (
        <div>
            <Head>
                <title>Fabra Online - Bring It On | Forgot Password</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                    <Stack mt={5} px={8} py={12}
                        mx={[null,"35%"]}
                        spacing={3}
                        borderRadius={8}
                        shadow={[null, 'dark-lg']}>
                        <Box as="a" href="/" aria-label="Fabra online, Back to homepage">
                            <Center>
                                <Image
                                    width={{ base: "110px", md: "170px" }}
                                    src="/images/logo.svg"
                                    alt="Fabra Online Logo"
                                />
                            </Center>

                        </Box>
                        <FormControl>
                            <FormLabel>Email Address</FormLabel>
                        <Input
                            onChange={e => setEmail(e.target.value)}
                                autoFocus
                                aria-label="Email Address"
                                name="email"
                                required
                                placeholder="Please enter your email."
                            />
                        </FormControl>
                        <Button type="submit" mt={4}
                            bgGradient="linear(to-r,brand.200,brand.100)"
                            _hover={{ bg: "brand.100" }}
                            color="white"
                            variant="solid"
                            onClick={() => {
                                auth.sendPasswordResetEmail(email).then(() => {
                                    toast({
                                        title: 'Success!',
                                        description: 'Check your mail, an email containing password reset instruction has been sent.',
                                        status: 'success',
                                        duration: 9000,
                                        isClosable: true
                                    });
                                    //router.push('/test-page');
                                }).catch((error) => {
                                    toast({
                                        title: 'An error occurred.',
                                        description: error.message,
                                        status: 'error',
                                        duration: 9000,
                                        isClosable: true
                                    });
                                });
                            }}>
                            Reset Password
                        </Button>
                    </Stack>
            </main>
        </div>
    );
};

export default ForgotPassword