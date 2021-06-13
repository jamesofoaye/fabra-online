import { FormLabel, Select, FormControl, Input, FormHelperText, Button, Center, Heading, Text, NumberDecrementStepper, NumberIncrementStepper, NumberInputStepper, NumberInputField, NumberInput, Textarea, Stack } from "@chakra-ui/react";
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
                        <option> {category.name}</option>
                    )
                })
            )
        }
    }
    return (
        <Select placeholder="Select Category" required onChange={(e) => { props.handleChange(e); }} value={props.adDetails.category} name="category">
            {showCategories()}
        </Select>
    )
}
export default graphql(getCategories)(CategorySelect);
