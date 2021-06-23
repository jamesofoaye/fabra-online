import { gql } from "apollo-boost";
//Get all ads
const getAds = gql`
{
    ads{
        id
        title
        description
        price
        location
        datePosted
        gallery
    }
}
`
// Get all categories
const getCategories = gql`
{
categories{
id
name
}
}
`
export { getAds, getCategories };