import { gql } from "apollo-boost";

const getAds = gql`
{
    ads{
        title
        description
        price
        isNegotiable
        adLocation
        condition
        datePosted
        gallery
    }
}
`
//tobe added above
// category
const getCategories = gql`
{
categories{
id
name
}
}
`

export { getAds, getCategories };