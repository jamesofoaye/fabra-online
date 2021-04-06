import { Stack, Button, Text, Image, Flex, Box, Avatar } from '@chakra-ui/react'


export default function productAdCardDetails() {
    return (
        <Stack direction={{ base: "column", md: "row" }} spacing="24px" p={{ base: 2, md: 16 }}>
            <Box w={{ md: 1 / 4 }} h={1 / 3} pt={{ base: 20, md: 10 }}>
                <Image src="https://bit.ly/2k1H1t6"
                />
            </Box>
            <Box direction={"column"} spacing="12px" pt={{ base: "65%", md: 10 }}>
                <Box>
                    <Flex>
                        <Avatar src="https://bit.ly/sage-adebayo" />
                        <Box ml="3">
                            <Text fontWeight="semibold" fontSize="lg">
                                James Ofori
                            </Text>
                            <Text fontSize="sm">Ad posted on {new Date().toLocaleDateString()}</Text>
                        </Box>
                    </Flex>
                </Box>
                <Box>
                    <Button
                        bgGradient="linear(to-r,brand.200,brand.100)"
                        color={"white"}
                        _hover={{ bg: "brand.200" }}
                        my={2}
                    >
                        Show Contact
                    </Button>
                </Box>
                <Box>
                    <Text fontWeight="sbold" fontSize="xl"> Modern, Chic Penthouse with Mountain</Text>
                </Box>
                <Text fontWeight="bold" fontSize="xl">$96.00</Text>
                <Box>
                    <Text fontWeight="semibold" fontSize="xl">Description </Text>
                    <Text>The smallest self-contained apartments are referred to as studio, efficiency or
                    bachelor apartments in the US, or studio flat in the UK
                    </Text>
                </Box>
            </Box>
        </Stack>
    );
}