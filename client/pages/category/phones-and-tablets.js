import {Box, Button, Flex, Image, Spacer} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";


//Get data from graphql server
import { graphql } from "react-apollo";
import { getMPandT } from "../../queries/queries";

const Phones_and_Tablets = (props) => {
    const showAds = () => {
        if (props.data.loading) {
            return <div>Loading</div>
        } else {
            return props.data.category.ads.map(ad => {
                return (<div key={ad.id}>
                    <img src={ad.gallery[0]} />
                    {ad.title}
                    {ad.description}
                    {ad.price}
                    {ad.location}
                    {ad.datePosted}
                </div>)
            })
        }
    }
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
             {/* Render catergory ads */}
             <br/>
            <br/>
            <br/>
            <br/>
            <div>
            <h5><strong>Hello and welocome to the ... ads page</strong></h5>
                         {showAds()}
        </div>
        {/* Render category ads */}
        </div>
    )
}
export default graphql(getMPandT)(Phones_and_Tablets);