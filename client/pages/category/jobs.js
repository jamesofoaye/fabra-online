import {Box, Button, Flex, Image, Spacer} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";

export default function Jobs(){
    return(
        <div>
            <Box>
                <Flex bgGradient="linear(to-r,brand.100,brand.200,brand.100)" pos="fixed" width="full">
                    <Box as="a" marginLeft={{ base: 3, md: 16 }}
                         my={{ base: 3, md: 2 }}
                         href="/">
                        <Image
                            width={{ base: "110px", md: "170px" }}
                            src="/images/logo.svg"
                            alt="Fabra Online Logo"
                        />
                    </Box>
                    <Spacer />
                    <Button leftIcon={<AddIcon />}
                            color="white"
                            bgGradient="linear(to-r,brand.200,brand.100)"
                            _hover={"brand.100"}
                            marginRight={{ base: 3, md: 10 }}
                            marginTop={{ base: 5, md: 7 }}>
                        Post an Ad
                    </Button>
                </Flex>
            </Box>
        </div>
    )
}
