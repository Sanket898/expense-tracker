const httpStatus = require("http-status");
const { Movie } = require("../models");
const catchAsync = require("../utils/catchAsyncError");
const ApiError = require("../utils/ApiError");

const getMovies = catchAsync(async (req, res, next) => {
  let queryStr = JSON.stringify(req.query);
  queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

  const queryObj = JSON.parse(queryStr);
  const movies = await Movie.find(queryObj);

  res.status(httpStatus.OK).send(movies);
});

const createMovie = catchAsync(async (req, res, next) => {
  const movie = await Movie.create(req.body);
  res.status(httpStatus.CREATED).send(movie);
});

const getMovie = catchAsync(async (req, res, next) => {
  const movie = await Movie.findById(req.params.movieId);

  if (!movie) {
    throw new ApiError(httpStatus.NOT_FOUND, "Movie Not Found!");
  }
  res.status(httpStatus.OK).send(movie);
});

const updateMovie = catchAsync(async (req, res, next) => {
  const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // returns updated document
    runValidators: true,
  });

  if (!movie) {
    throw new ApiError(httpStatus.NOT_FOUND, "Movie Not Found!");
  }

  res.status(httpStatus.OK).send(movie);
});

const deleteMovie = catchAsync(async (req, res, next) => {
  const movie = await Movie.findByIdAndDelete(req.params.id);

  res.status(httpStatus.NO_CONTENT).send(movie);
});

const getMovieStats = catchAsync(async (req, res, next) => {
  const stats = await Movie.aggregate([
    {
      $match: { ratings: { $gte: 4.5 } },
    },
    {
      $group: {
        _id: "$releaseYear",
        avgRatings: { $avg: "$ratings" },
        avgPrice: { $avg: "$price" },
        totalPrice: { $sum: "$price" },
        count: { $sum: 1 },
      },
    },
    { $sort: { _id: 1 } },
  ]);

  res.status(httpStatus.OK).send(stats);
});

const GetMoviesByGenre = catchAsync(async (req, res, next) => {
  const genre = req.params.genre;

  const movies = await Movie.aggregate([
    {
      $unwind: "$genres",
    },
    {
      $group: {
        _id: "$genres",
        movieCount: { $sum: 1 },
        movies: { $push: "$name" },
      },
    },
    { $addFields: { genre: "$_id" } },
    {
      $project: { _id: 0 },
    },
    {
      $sort: { movieCount: -1 },
    },
    {
      $match: { genre: genre },
    },
  ]);

  res.send(movies);
});

module.exports = {
  getMovies,
  createMovie,
  getMovie,
  updateMovie,
  deleteMovie,
  getMovieStats,
  GetMoviesByGenre,
};
