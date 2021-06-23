const graphql = require("graphql");
const { Category, Ad } = require("../model/models");
const {AdType, CategoryType} = require("./gqltypes");

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
          description: { type: GraphQLString },
          location: { type: GraphQLString },
          datePosted: { type: GraphQLString },
          categoryId: {type: GraphQLString},
          gallery: {type: new GraphQLList(GraphQLString)}
        },
        resolve: (parent, args) => {
          let newAd = new Ad({
            title: args.title,
            lescription: args.description,
            price: args.price,
            categoryId: args.categoryId,
            location: args.location,
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

  module.exports = Mutation;