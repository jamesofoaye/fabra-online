import {
  FormLabel,
  Select,
  FormControl,
  Input,
  FormHelperText,
  Button,
  Center,
  Heading,
  Text,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberInputField,
  NumberInput,
  Textarea,
  Stack
} from "@chakra-ui/react";
import { graphql } from "react-apollo";
import { getCategories } from "../../queries/queries";

const CategorySelect = (props) => {
    //get list of Categories
    const showCategories = () => {
        if (props.data.loading) {
            return (<option disabled> Loading...</option>)
        } else {
            return (
                props.data.categories.map(category => {
                    return (
                        <option key={category.id} value={category.id}> {category.name}</option>
                    )
                })
            )
        }
  }
  return <>{showCategories()}</>;
  };
  

export default graphql(getCategories)(CategorySelect);
