const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const { Movie } = require("../models");

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((err) => {
    console.log(err.message);
  });

// Read movies.json file
const movies = JSON.parse(fs.readFileSync("./src/data/movies.json", "utf-8"));

// Delete existing movies from database
const deleteMovies = async (req, res) => {
  await Movie.deleteMany();
  console.log("Data deleted successfully!");
  process.exit();
};

// Insert data to collection
const insertMovies = async (req, res) => {
  await Movie.create(movies);
  console.log("Movies inserted to collection!");
  process.exit();
};

//Calling Functions
if (process.argv[2] == "--delete") {
  deleteMovies();
}
if (process.argv[2] == "--import") {
  insertMovies();
}

/* COMMAND FOR SCRIPT 
    node src/data/import-dev-data.js --delete
*/
