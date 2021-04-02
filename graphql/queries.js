import gql from "graphql-tag";

export const GET_PRODUCT_CARD_QUERY = gql`
  query {
     posts: posts {
       id
       price
       imagesSlug
       title
     }
   }
`;

/**export const GET_POSTS_DETAILS_QUERY = gql`
    query getPosts {
      posts {
        id
        title
        author
        price
        contactNumber
        isNegotiable
        createdAt
        description
        category
        location
        imagesSlug
      }
    }
`;
*/
