const graphql = require("graphql");
const { Category, Ad } = require("../model/models");

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLString,
  GraphQLList
} = graphql;

  //AdTypeSchema
  const AdType = new GraphQLObjectType({
    name: "Ad",
    fields: () => ({
      id: { type: GraphQLID },
      title: { type: GraphQLString },
      description: { type: GraphQLString },
      price: { type: GraphQLString },
      location: { type: GraphQLString },
      datePosted: { type: GraphQLString },
      categoryId: { type: GraphQLString},
      gallery: { type: new GraphQLList(GraphQLString) },
    })
  });

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
module.exports = {AdType, CategoryType};