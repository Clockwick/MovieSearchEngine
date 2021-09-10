const MOVIE_API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_URL}&page=1`;
const UNSPLASH_API_URL = `https://api.unsplash.com/search/photos?orientation=landscape&page=1&client_id=${process.env.UNSPLASH_API_URL}`;
const IMAGE_URL = `https://image.tmdb.org/t/p/w185`;

export { MOVIE_API_URL, IMAGE_URL, UNSPLASH_API_URL };
