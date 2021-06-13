import gql from "graphql-tag";

export const GET_POSTS_QUERY = gql`
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

