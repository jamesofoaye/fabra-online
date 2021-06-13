import { useQuery } from '@apollo/react-hooks'
import { GET_POSTS_QUERY } from './queries'

export const usePosts = () => {
    const { loading, error, data } = useQuery(GET_POSTS_QUERY)

    return {
        loading,
        error,
        data
    }
}

