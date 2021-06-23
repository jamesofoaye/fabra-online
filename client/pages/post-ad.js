import {
  FormLabel, Select, FormControl, Input, FormHelperText,
  Button, Center, Heading, NumberDecrementStepper,
  NumberIncrementStepper, NumberInputStepper,
  NumberInputField, NumberInput, Textarea, Stack
} from "@chakra-ui/react";
//import ImageUploader from '../components/uploader'
import Head from "next/head";

//written for backend
import { useState } from "react";

const Post_An_Ad = (props) => {
 const [adInfo, setadInfo] = useState({
   title: "",
   description: "",
   price: null,
   location: "",
   category: "",
   gallery: []
 });

const handleInputChange = (e) => {
  const name = e.target.name;
  const value = e.target.value
  setadInfo(preVal => {
    return {...preVal, [name]: value}
  })
}
  return (
    <>
      <Head>
        <title>Fabra Online - Bring It On | Post Ad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center>
        <Heading color="brand.200"
          py={2}>
          Post Ad
        </Heading>
      </Center>

      <Stack px={{ base: 8, md: "30%" }}>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input name="title" value={adInfo.title}
          onChange={handleInputChange}
            autoFocus
            aria-label="Title"
            name="title"
            required
            placeholder="Please enter the name of your ad."
          />
        </FormControl>

        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea name="description" value={adInfo.description}
          onChange={handleInputChange}
            aria-label="Description"
            name="description"
            required
            placeholder="Please enter description."
          />
        </FormControl>

        <FormControl>
          <FormLabel>Price</FormLabel>
          <NumberInput>
            <NumberInputField name="price" value={adInfo.price}
            onChange={handleInputChange}
              required
              aria-label="Price"
              name="price"
              placeholder="Please enter price."
            />
          </NumberInput>
        </FormControl>

        <FormControl>
          <FormLabel>Location</FormLabel>
          <Input name="location" value={adInfo.location}
          onChange={handleInputChange}
            aria-label="Location"
            name="location"
            required
            placeholder="Please enter your location."
          />
        </FormControl>

        <FormControl>
          <FormLabel>Category</FormLabel>
          <Select name="category" value={adInfo.category}
          onChange={handleInputChange}
            placeholder="Select Category"
            required
          >
            <option>Animals &amp; Pets</option>
            <option>Computers &amp; Electronics</option>
            <option>Fashion</option>
            <option>Furniture &amp; Appliances</option>
            <option>Grocery / African Restaurants &amp; Food</option>
            <option>House / Apartments</option>
            <option>Jobs</option>
            <option>Mobile phones &amp; Tablets</option>
            <option>Nanny &amp; Baby Sitters</option>
            <option>Repair &amp; Construction</option>
            <option>Salon &amp; Barbering</option>
            <option>Vehicles</option>
          </Select>
          <FormHelperText>
            Which category does your product or service falls in?
          </FormHelperText>
        </FormControl>

        <Button
          type="submit" mt={10}
          bgGradient="linear(to-r,brand.200,brand.100)"
          _hover={{ bg: "brand.100" }}
          color="white"
          variant="solid"
        >
          Post Ad
        </Button>
{console.log(adInfo)}
      </Stack>
    </>
  );
}
export default Post_An_Ad;