const graphql = require("graphql");
import { Category, Ad } from "../model/models";
import {AdType, CategoryType} from "./gqltypes";
import Mutation from "./gqlmutations";

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLString,
  GraphQLList
} = graphql;

//Root Queries
const RootQueryType = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
      //Ad Query
      ad: {
        type: AdType,
        args: { id: { type: GraphQLID } },
        resolve: (parent, args) => {
          return Ad.findById(args.id);
        }
      },
      //Catergory Query
      category: {
        type: CategoryType,
        args: { id: { type: GraphQLID } },
        resolve: (parent, args) => {
          return Category.findById(args.id);
        }
      },
      //Get all ads
      ads: {
        type: new GraphQLList(AdType),
        resolve: (parent, args) => {
          return Ad.find({})
        }
      },
      //Get all categories
      categories: {
        type: new GraphQLList(CategoryType),
        resolve: (parent, args) => {
          return Category.find({})
        }
      }
    }
  });

  export default RootQueryType;