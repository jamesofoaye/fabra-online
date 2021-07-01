import {
  FormLabel, Select, FormControl, Input, FormHelperText,
  Button, Center, Heading, NumberDecrementStepper,
  NumberIncrementStepper, NumberInputStepper,
  NumberInputField, NumberInput, Textarea, Stack
} from "@chakra-ui/react";
import Head from "next/head";

//written for backend
import { useState } from "react";
import CategorySelect from "../components/utilities/CategorySelect";
import UploadForm from "../components/utilities/UploadForm";
import ImageGrid from "../components/utilities/ImageGrid";
import { v4 as uuidv4 } from 'uuid';

import { graphql, Mutation } from "react-apollo";
import { newAdMutation } from "../queries/queries";

const adBucket = uuidv4();

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

const submitForm = (e) => {
  e.preventDefault()
  props.newAdMutation({
    variables:{
      title: adInfo.title,
      description: adInfo.description,
      price: adInfo.price,
      location: adInfo.location,
      categoryId: adInfo.category,
      gallery: adInfo.gallery
    }
  }
  )
}
const adImageUrl = (url) => {
  if(url){
    adInfo.gallery.push(url)
    
  }
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
<form action="/post-ad" method="POST">
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
          <Select placeholder="Select Category" 
          required onChange={handleInputChange} 
          value={adInfo.category} 
          name="category">
            <CategorySelect/>
          </Select>
          <FormHelperText>
            Which category does your product or service falls in?
          </FormHelperText>
        </FormControl>
        {/* Photo Upload Form */}
        <div>
        <UploadForm adImageUrl={adImageUrl} adBucket={adBucket}/>
        <ImageGrid adBucket={adBucket}/>
        </div>
        {/* Photo Upload Form */}
        <Button
          onClick={submitForm}
          type="submit" mt={10}
          bgGradient="linear(to-r,brand.200,brand.100)"
          _hover={{ bg: "brand.100" }}
          color="white"
          variant="solid"
        >
          Post Ad
        </Button>
      </Stack>
      </form>
      {console.log(adInfo)}
    </>
  );
}
export default graphql(newAdMutation, {name: "newAdMutation"})(Post_An_Ad);