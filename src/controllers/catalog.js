const {
  getAllMovies,
  getMovieById,
  searchAllMovies,
} = require("../services/movie");

module.exports = {
  home: async (req, res) => {
    const movies = await getAllMovies();

    res.render("home", { movies });
  },
  details: async (req, res) => {
    const id = req.params.id;
    const movieDetails = await getMovieById(id);

    if (!movieDetails) {
      return res.render("404");
    }

    movieDetails.starRating = "&#x2605;".repeat(movieDetails.rating);

    res.render("details", { movieDetails });
  },
  search: async (req, res) => {
    let allMovies = "";

    const searchTitle = req.query.title;
    const searchGenre = req.query.genre;
    const searchYear = req.query.year;

    if (!searchTitle && !searchGenre && !searchYear) {
      let allMovies = await getAllMovies();
      res.render("search", { allMovies });
    } else if (searchTitle || searchGenre || searchYear) {
      allMovies = await searchAllMovies(searchTitle, searchGenre, searchYear);
      res.render("search", { allMovies });
    }
  },
};
