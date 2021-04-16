import { Box, Image, Flex, Text, Link, Spinner, SimpleGrid } from "@chakra-ui/react";
import { FaMapMarkerAlt } from 'react-icons/fa'
import Head from 'next/head'
import NavBar from '../components/navbar'
import withApollo from "../graphql/apollo";
import { useQuery } from '@apollo/client'
import { GET_POSTS_QUERY } from '../graphql/queries'

function TestPage() {

    const { loading, data } = useQuery(GET_POSTS_QUERY)

    return (
        <div>
            <Head>
                <title>Fabra Online | Bring It On</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box pb={28}>
                <NavBar />
            </Box>
            <main>
                {loading ? (
                    <Flex pt={24} align="center" justify="center">
                        <Spinner size="xl" label="Loading Posts" />
                    </Flex>
                ) : (
                    <SimpleGrid minChildWidth="200px" /*templateColumns={[null, "repeat(3, 1fr)"]}*/ spacingY="20px" spacingX="40px" mx={5} >
                        {data.posts.map((data) => (
                            <Box key={data.id}>
                                <Link href={"/" + data.id} textDecoration="none">
                                    <Box borderWidth="1px" borderRadius="lg">
                                        <Image src="https://bit.ly/2k1H1t6" borderTopRadius="lg" />
                                        <Box p="3">
                                            <Flex mt={1} direction="row" >
                                                <Box as={FaMapMarkerAlt} color="brand.200"></Box>
                                                <Text
                                                    ml={2}
                                                    textTransform="capitalize"
                                                    fontSize="sm"
                                                    fontWeight="semibold"
                                                >
                                                    {data.location}
                                                </Text>
                                            </Flex>
                                            <Flex>
                                                <Text mt={1} fontSize="xl" fontWeight="semibold"
                                                    textTransform="capitalize"
                                                    lineHeight="short">
                                                    {data.title}
                                                    <Text mt={1}>{data.price}</Text>
                                                </Text>
                                            </Flex>
                                        </Box>
                                    </Box>
                                </Link>
                            </Box>
                        ))
                        }
                    </SimpleGrid>
                )
                }

            </main>

        </div>
    )
}

export default withApollo({ ssr: true })(TestPage)