import {Center, Divider, Link, Text} from "@chakra-ui/react";

export default function footer() {
    return (
        <>
            <footer>
                <Center bgGradient="linear(to-r,brand.100,brand.200,brand.100)" color="white" height="50px">
                    <Text margin={2}>
                        Copyrights&nbsp; &copy; {new Date().getFullYear()} Fabra Online
                    </Text>
                    <Divider orientation="vertical" height="30px" mx={2} />
                    <Text>
                        Developed By
                        {" "}
                        <Link textDecoration="underline" href="https://ofori-james-ayerakwa.me" isExternal>
                            Ofori James Ayerakwa
                        </Link>
                    </Text>
                </Center>
            </footer>
        </>
    )
}
