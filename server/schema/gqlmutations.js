const graphql = require("graphql");
import { Category, Ad } from "../model/models";
import {AdType, CategoryType} from "./gqltypes";

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLString,
  GraphQLList
} = graphql;

//Mutations
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
      //New Ad Mutation
      addAd: {
        type: AdType,
        args: {
          title: { type: GraphQLString },
          price: { type: GraphQLString },
          adDescription: { type: GraphQLString },
          adLocation: { type: GraphQLString },
          datePosted: { type: GraphQLString },
          categoryId: {type: GraphQLString},
          gallery: {type: new GraphQLList(GraphQLString)}
        },
        resolve: (parent, args) => {
          let newAd = new Ad({
            title: args.title,
            adDescription: args.adDescription,
            price: args.price,
            categoryId: args.categoryId,
            adLocation: args.adLocation,
            datePosted: args.datePosted,
            gallery: args.gallery
          });
          return newAd.save();
        }
      },
      //New Category Mutation
      addCategory: {
        type: CategoryType,
        args: { name: { type: GraphQLString } },
        resolve: (parent, args) => {
          let newCat = new Category({
            name: args.name
          });
          return newCat.save();
        }
      }
    }
  });

  export default Mutation;