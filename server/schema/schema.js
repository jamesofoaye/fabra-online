const graphql = require("graphql");
import { Category, Ad } from "../model/models";
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLString,
  GraphQLList
} = graphql;

//CategoryType Schema
const CategoryType = new GraphQLObjectType({
  name: "Category",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    ads: {
      type: new GraphQLList(AdType),
      resolve: function (parent, args) {
        return Ad.find({ categoryId: parent.id });
      }
    }
  })
});
//AdTypeSchema
const AdType = new GraphQLObjectType({
  name: "Ad",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    price: { type: GraphQLString },
    condition: { type: GraphQLString },
    isNegotiable: { type: GraphQLString },
    description: { type: GraphQLString },
    adLocation: { type: GraphQLString },
    datePosted: { type: GraphQLString },
    gallery: { type: new GraphQLList(GraphQLString) },
    category: {
      type: new GraphQLList(CategoryType),
      resolve: (parent, args) => {
        return Category.find({ id: parent.categoryId });
      }
    }
  })
});
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
    ads: {
      type: new GraphQLList(AdType),
      resolve: (parent, args) => {
        return Ad.find({})
      }
    },
    categories: {
      type: new GraphQLList(CategoryType),
      resolve: (parent, args) => {
        return Category.find({})
      }
    }
  }
});
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
        condition: { type: GraphQLString },
        isNegotiable: { type: GraphQLString },
        description: { type: GraphQLString },
        adLocation: { type: GraphQLString },
        datePosted: { type: GraphQLString },
        gallery: { type: new GraphQLList(GraphQLString) }
      },
      resolve: (parent, args) => {
        let newAd = new Ad({
          title: args.title,
          description: args.description,
          price: args.price,
          condition: args.condition,
          isNegotiable: args.isNegotiable,
          adLocation: args.adLocation,
          datePosted: new Date().toDateString(),
          gallery: args.gallery
        });
        return newAd.save();
      }
    },
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
//Schema export
const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: Mutation
});
module.exports = schema;
