import * as genresAPI from "./genreService";

const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    isInWatchList: false,
    isFavourite: false,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Die Hard",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    isInWatchList: false,
    isFavourite: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Get Out",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    isInWatchList: false,
    isFavourite: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Trip to Italy",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    isInWatchList: false,
    isFavourite: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Airplane",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    isInWatchList: false,
    isFavourite: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Wedding Crashers",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    isInWatchList: false,
    isFavourite: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Gone Girl",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    isInWatchList: false,
    isFavourite: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "The Sixth Sense",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    isInWatchList: false,
    isFavourite: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "The Avengers",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    isInWatchList: false,
    isFavourite: false,
  }
];

export function getMovies() {
  return movies;
}

export function getWatchListMovies() {
  return movies.filter(i=> i.isInWatchList);
}

 

 export function deleteMovieFromWatchList(id) {
  let movieInDb = movies.find(m => m._id === id);
  movieInDb.isInWatchList = false;
}

export function addMovieToWatchlist(id) {
  let movieInDb = movies.find(m => m._id === id);
  movieInDb.isInWatchList = true;
}

export function unmarkMovieFavourite(id) {
  let movieInDb = movies.find(m => m._id === id);
  movieInDb.isFavourite = false;
}

export function markMovieFavourite(id) {
  let movieInDb = movies.find(m => m._id === id);
  movieInDb.isFavourite = true;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.name = movie.name;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
