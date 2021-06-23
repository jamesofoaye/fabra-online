const graphql = require("graphql");
const { Category, Ad } = require("../model/models");
const {AdType, CategoryType} = require("./gqltypes");
const RootQueryType = require("./gqlqueries");
const Mutation = require("./gqlmutations");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLString,
  GraphQLList
} = graphql;

//Schema export
const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: Mutation
});
module.exports = schema;