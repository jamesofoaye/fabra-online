import {useToast} from '@chakra-ui/react';
import {useAuth} from '../lib/auth-context';
import Auth from '../components/auth';
import {useRouter} from 'next/router';

const SignUp = () => {
    const auth = useAuth();
    const toast = useToast();
    const router = useRouter();

    const signUp = ({email, pass}) => {
        auth.signup(email, pass)
            .then(() => {
                toast({
                    title: 'Success!',
                    description: 'Your account has been created.',
                    status: 'success',
                    duration: 3000,
                    isClosable: true
                });
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

    return <Auth type="Sign Up" onSubmit={signUp} />;
};

export default SignUp