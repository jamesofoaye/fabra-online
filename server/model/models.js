const mongoose = require("mongoose");
// Mongo Schema for ad
const adSchema = new mongoose.Schema({
  title: String,
  price: String,
  description: String,
  location: String,
  categoryId: String,
  datePosted: String,
  gallery: []
});

//Mongo Schema for category
const categorySchema = new mongoose.Schema({
  name: String
});
//Modules and exports
const Category = new mongoose.model("category", categorySchema);
const Ad = new mongoose.model("ad", adSchema);
module.exports = { Category, Ad };