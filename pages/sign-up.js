import { useToast } from '@chakra-ui/react';
import { useAuth } from '../lib/auth-context';
import Auth from '../components/auth';
import { useRouter } from 'next/router';
import Head from 'next/head';

const SignUp = () => {
    const auth = useAuth();
    const toast = useToast();
    const router = useRouter();

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
        <div>
            <Head>
                <title>Fabra Online - Bring It On | Sign Up</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Auth type="Sign Up" onSubmit={signUp} />
        </div>
    );
};

export default SignUp