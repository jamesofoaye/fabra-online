import { gql } from "apollo-boost";
//Get all ads
const getAds = gql`
  {
    ads {
      id
      title
      description
      price
      location
      datePosted
      gallery
    }
  }
`;
// Get all categories
const getCategories = gql`
  {
    categories {
      id
      name
    }
  }
`;
//Get Individual Categories
const getCandE = gql`
  {
    category(id: "60d34522171bc100152607f0") {
      id
      name
      ads {
        id
        title
        description
        price
        location
        datePosted
        gallery
      }
    }
  }
`;
const getFashion = gql`
  {
    category(id: "60d3452d171bc100152607f1") {
      id
      name
      ads {
        id
        title
        description
        price
        location
        datePosted
        gallery
      }
    }
  }
`;
const getFandA = gql`
  {
    category(id: "60d3453a171bc100152607f2") {
      id
      name
      ads {
        id
        title
        description
        price
        location
        datePosted
        gallery
      }
    }
  }
`;

const getGARandF = gql`
  {
    category(id: "60d34548171bc100152607f3") {
      id
      name
      ads {
        id
        title
        description
        price
        location
        datePosted
        gallery
      }
    }
  }
`;
const getHandA = gql`
  {
    category(id: "60d34569171bc100152607f4") {
      id
      name
      ads {
        id
        title
        description
        price
        location
        datePosted
        gallery
      }
    }
  }
`;
const getJobs = gql`
  {
    category(id: "60d34572171bc100152607f5") {
      id
      name
      ads {
        id
        title
        description
        price
        location
        datePosted
        gallery
      }
    }
  }
`;
const getMPandT = gql`
  {
    category(id: "60d34581171bc100152607f6") {
      id
      name
      ads {
        id
        title
        description
        price
        location
        datePosted
        gallery
      }
    }
  }
`;

const getNandBS = gql`
  {
    category(id: "60d3458b171bc100152607f7") {
      id
      name
      ads {
        id
        title
        description
        price
        location
        datePosted
        gallery
      }
    }
  }
`;

const getRandC = gql`
  {
    category(id: "60d345a9171bc100152607f8") {
      id
      name
      ads {
        id
        title
        description
        price
        location
        datePosted
        gallery
      }
    }
  }
`;

const getBandS = gql`
  {
    category(id: "60d345b3171bc100152607f9") {
      id
      name
      ads {
        id
        title
        description
        price
        location
        datePosted
        gallery
      }
    }
  }
`;

const getVehicles = gql`
  {
    category(id: "60d345bc171bc100152607fa") {
      id
      name
      ads {
        id
        title
        description
        price
        location
        datePosted
        gallery
      }
    }
  }
`;
//todo get the id for the "Animals and Pets Category" and add to query
const getAandP = gql`
  {
    category(id: "60d4ef69c034c3001502b7d7") {
      id
      name
      ads {
        id
        title
        description
        price
        location
        datePosted
        gallery
      }
    }
  }
`;

//New Ad mutation 
const newAdMutation = gql`
mutation($title: String, $description: String, $price: String, $location: String, $categoryId: String, $gallery: [String]){
  addAd(title: $title, description: $description, price: $price, location: $location, categoryId: $categoryId, gallery: $gallery){
    title
    price
    description
    location 
  }
}
`

export {
  getAds,
  getAandP,
  getCategories,
  getVehicles,
  getBandS,
  getCandE,
  getFashion,
  getFandA,
  getGARandF,
  getHandA,
  getJobs,
  getMPandT,
  getNandBS,
  getRandC,
  newAdMutation
};
