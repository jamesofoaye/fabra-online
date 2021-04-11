import { Box, Image, Flex, Text, Link, Spinner} from "@chakra-ui/react";
import { FaMapMarkerAlt } from 'react-icons/fa'
import Head from 'next/head'
import NavBar from '../components/navbar'
import withApollo from "../graphql/apollo";
import { useQuery } from '@apollo/client'
import { GET_POSTS_QUERY } from '../graphql/queries'

function TestPage() {
    const { loading, error, data } = useQuery(GET_POSTS_QUERY)
    if (error) return <h1>Error....</h1>
    if (loading)
        return (
                <Flex pt={24} align="center" justify="center">
                    <Spinner size="xl" label="Loading Posts" />
                </Flex>
        )
    return (
        <div>
            <Head>
                <title>Fabra Online | Bring It On</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <main>
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
            </main>
        </div>
    )
}

export default withApollo({ ssr: true })(TestPage)