const { graphqlHTTP } = require("express-graphql");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//Local imports
const schema = require("../schema/schema");
//New express app
const app = express();

//Allow cross-origin requests
app.use(cors());

//Connection to mongoDB

const mongoURI = "mongodb+srv://wematu:Cmo6c77QaFHrHPux@fabra0.d7moj.mongodb.net/adsDB";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

//Local mongoDB
// mongoose.connect("mongodb://localhost:27017/adsDB", { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once("open", () => { console.log("Database open"); });

//Graphql initialization
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));
//Start Server

app.get("/", (req, res) => {
  res.send("Hello world")
})

app.listen(process.env.PORT || 4000, () => {
  console.log("Server running");
});
