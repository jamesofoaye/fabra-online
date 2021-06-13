import {
  FormLabel, Select,
  FormControl, Input, FormHelperText,
  Button, Center, Heading, Text, NumberDecrementStepper,
  NumberIncrementStepper, NumberInputStepper,
  NumberInputField, NumberInput, Textarea, Stack
} from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";

//Select Input
import CategorySelect from "../components/utilities/CategorySelect";

const Post_An_Ad = () => {
  const [adDetails, setAdDetails] = useState({
    title: "",
    description: "",
    adLocation: "",
    price: "",
    category: ""
  });
  //on chanege event listener
  const handleChange = (e) => {
    const name = e.target.name;
    setAdDetails((preVal => {
      return { ...preVal, [name]: e.target.value }
    }))
  }
  //Submit form event listener
  const submitForm = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <Head>
        <title>Fabra Online - Bring It On | Post Ad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center>
        <Heading color="brand.200" py={2}> Post Ad </Heading>
      </Center>
      <Stack px={{ base: 8, md: "30%" }}>
        {/* Upload Form */}
        <form onSubmit={submitForm}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input onChange={(e) => { handleChange(e); }} value={adDetails.title} autoFocus aria-label="Title" name="title" required placeholder="Please enter the name of your ad." />
          </FormControl>

          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea onChange={(e) => { handleChange(e); }} value={adDetails.description} aria-label="Description" name="description" required placeholder="Please enter description." />
          </FormControl>
          <FormControl>
            <FormLabel>Price (GHC)</FormLabel>
            <Input type="number" onChange={(e) => { handleChange(e); }} value={adDetails.price} name="price">
            </Input>
          </FormControl>

          <FormControl>
            <FormLabel>Location</FormLabel>
            <Input onChange={(e) => { handleChange(e); }} value={adDetails.adLocation} aria-label="Location" name="adLocation" required placeholder="Please enter your location." />
          </FormControl>

          <FormControl>
            <FormLabel>Category</FormLabel>
            {/* //Category Component */}
            <CategorySelect handleChange={handleChange} adDetails />
            <FormHelperText>
              Which category does your product or service fall in?
          </FormHelperText>
          </FormControl>
          <Button type="submit" mt={10} bgGradient="linear(to-r,brand.200,brand.100)" _hover={{ bg: "brand.100" }} color="white" variant="solid" > Post Ad </Button>
        </form>
        {console.log(adDetails)}
        {/* Upload Form */}
      </Stack>
    </>
  );
}
export default Post_An_Ad;