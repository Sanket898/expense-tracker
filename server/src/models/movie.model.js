const mongoose = require("mongoose");
const fs = require("fs");

const movieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required!"],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required!"],
    },
    duration: {
      type: String,
      required: [true, "Duration is required!"],
    },
    ratings: {
      type: Number,
      validate: {
        validator: function (value) {
          return value >= 1 && value <= 10;
        },
        message: "Ratings {{VALUE}} should be between 1 to 10",
      },
    },
    totalRating: {
      type: Number,
    },
    releaseYear: {
      type: Number,
      required: [true, "Release Year is required!"],
    },
    releaseDate: {
      type: Date,
      required: [true, "Release Date is required!"],
    },
    createAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    genres: {
      type: [String],
      required: [true, "Genres is required!"],
    },
    directors: {
      type: [String],
      required: [true, "Directors is required!"],
    },
    coverImage: {
      type: String,
      required: [true, "Cover image is required!"],
    },
    actors: {
      type: [String],
      required: [true, "actors is required!"],
    },
    price: {
      type: Number,
      required: [true, "Price is required!"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

movieSchema.virtual("durationInHours").get(function () {
  // does not store data in database
  return this.duration / 60;
});

//Executes before the document is saved in DB
//works for save() and create()
//not for insertMany() and other functions
movieSchema.pre("save", function (next) {
  this.createdBy = "Sanket";
  next();
});

//Executes after the document is saved in DB
movieSchema.post("save", function (doc, next) {
  const content = `New document is created with name ${
    doc.name
  } on ${new Date()}`;
  fs.writeFileSync("../log/log.txt", content, { flag: "a" }, (err) => {
    console.log(err.message);
  });
  next();
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
