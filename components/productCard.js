import { Box, Image, Flex, Text, Link } from "@chakra-ui/react";
import { FaMapMarkerAlt } from 'react-icons/fa'
import { useQuery } from '@apollo/react-hooks'
import { GET_POSTS_QUERY } from '../graphql/queries'
import { withApollo } from '../graphql/apollo'

function ProductCard() {
    const { loading, error, data } = useQuery(GET_POSTS_QUERY)
    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading.....</h1>
    return (
        <>
            {
                data.posts.map((data) => (
                    <Link href="/test-page-details" textDecoration="none" key={data.id}>
                        <Box /*maxW="320px"*/ pt={{ base: 20, md: "8%" }} borderRadius="lg" m={2}>
                            <Image src="https://bit.ly/2k1H1t6" />
                            <Box p="3" borderWidth="1px">
                                <Flex mt={2} direction="row" >
                                    <Box as={FaMapMarkerAlt} color="brand.200"></Box>
                                    <Text
                                        ml={2}
                                        textTransform="uppercase"
                                        fontSize="sm"
                                        fontWeight="bold"
                                    >
                                        {data.location}
                                    </Text>
                                </Flex>
                                <Flex>
                                    <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                                        {data.title}
                                        <Text mt={2}>{data.price}</Text>
                                    </Text>
                                </Flex>
                            </Box>
                        </Box>
                    </Link>
                ))
            }
        </>
    );
}


export default withApollo({ ssr: false })(ProductCard)