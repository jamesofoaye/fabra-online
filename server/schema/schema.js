const graphql = require("graphql");
import { Category, Ad } from "../model/models";
import {AdType, CategoryType} from "./gqltypes";
import RootQueryType from "./gqlqueries";
import Mutation from "./gqlmutations";
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