import { graphqlHTTP } from "express-graphql";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

//Local imports
import schema from "../schema/schema";
//New express app
const app = express();

//Allow cross-origin requests
app.use(cors());

//Connection to mongoDB
const mongoURI = "mongodb+srv://ufrLUeusmHUclJkp:ufrLUeusmHUclJkp@fabra0.d7moj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

//Local mongoDB
// mongoose.connect("'mongodb://localhost:27017/adsDB", { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once("open", () => { console.log("Database open"); });
//Graphql initialization
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));
//Start Server
app.listen(process.env.PORT || 4000, () => {
  console.log("Server running");
});
