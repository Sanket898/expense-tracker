const express = require("express");
const { movieController } = require("../controllers");

const router = express.Router();

router
  .route("/")
  .get(movieController.getMovies)
  .post(movieController.createMovie);

router
  .route("/:movieId")
  .get(movieController.getMovie)
  .patch(movieController.updateMovie)
  .delete(movieController.deleteMovie);

router.route("/movie-stats").get(movieController.getMovieStats);

router.route("/movies-by-genre/:genre").get(movieController.GetMoviesByGenre);

module.exports = router;
