import { Box, Image, Flex, Text, Link } from "@chakra-ui/react";
import { FaMapMarkerAlt } from 'react-icons/fa'

export default function ProductCard() {
    return (
        <Link href="/test-page-details" textDecoration="none">
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
                            Wood Bridge
                </Text>
                    </Flex>
                    <Flex>
                        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                            Modern, Chic Penthouse with Mountain
                    <Text mt={2}>$96.00</Text>
                        </Text>
                    </Flex>
                </Box>
            </Box>
        </Link>
    );
}
