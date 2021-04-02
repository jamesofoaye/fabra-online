import {useToast} from '@chakra-ui/react';
import {useAuth} from '../lib/auth-context';
import Auth from '../components/auth';
import {useRouter} from 'next/router';

const SignIn = () => {
    const auth = useAuth();
    const toast = useToast();
    const router = useRouter();

    const signIn = ({email, pass}) => {
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

    return <Auth type="Sign In" onSubmit={signIn} />;
};

export default SignIn