import { useToast } from '@chakra-ui/react';
import { useAuth } from '../lib/auth-context';
import Auth from '../components/auth';
import { useRouter } from 'next/router';
import Head from 'next/head'

const SignIn = () => {
    const auth = useAuth();
    const toast = useToast();
    const router = useRouter();

    const signIn = ({ email, pass }) => {
        auth.signinWithEmail(email, pass)
            .then(() => {
                router.push('/deals');
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
                <title>Fabra Online - Bring It On | Sign In</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Auth type="Sign In" onSubmit={signIn} />
        </div>
    );
};

export default SignIn