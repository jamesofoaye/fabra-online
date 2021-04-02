import { Stack, Button, Text, Image, Flex, Box, Avatar } from '@chakra-ui/react'


export default function productAdCardDetails() {
    return (
        <Stack direction={{ base: "column", md: "row" }} spacing="24px" p={16}>
            <Box w={1 / 3} h={1 / 3} pt={10}>
                <Image src="/images/test.jpg"
                />
            </Box>
            <Stack direction={"column"} spacing="12px" pt={10}>
                <Box>
                    <Text fontWeight="bold" fontSize="xl">Product name or title here</Text>
                </Box>
                <Box>
                    <Text>Price Here</Text>
                </Box>
                <Box>
                    <Flex>
                        <Avatar src="https://bit.ly/sage-adebayo" />
                        <Box ml="3">
                            <Text fontWeight="semibold" fontSize="lg">
                                User Name here
                            </Text>
                            <Text fontSize="sm">Ad posted at {new Date().toLocaleDateString()}</Text>
                        </Box>
                    </Flex>
                </Box>
                <Box>
                    <Button
                        bgGradient="linear(to-r,brand.200,brand.100)"
                        color={"white"}
                        _hover={{ bg:"brand.200" }}
                    >
                        Show Contact
                    </Button>
                </Box>
                <Box>
                    <Text fontWeight="bold" fontSize="xl">Description </Text>
                    <Text>The smallest self-contained apartments are referred to as studio, efficiency or
                    bachelor apartments in the US, or studio flat in the UK
                    </Text>
                </Box>
            </Stack>
        </Stack>
    );
}