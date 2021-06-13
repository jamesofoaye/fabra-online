import {Center, Input, InputGroup, InputRightAddon} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";

export default function Search(){
    return(
        <div>
            <Center>
                <InputGroup padding={{ base: 10, md: 16 }}>
                    <Input borderLeftRadius="0"
                           placeholder="Search Products..."
                           borderColor="brand.100"
                           focusBorderColor="brand.100" />
                    <InputRightAddon as="button" children={<SearchIcon />} variant="outline" bg="brand.100" color="white" />
                </InputGroup>
            </Center>
        </div>
    )
}
