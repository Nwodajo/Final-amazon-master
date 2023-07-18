const API_KEY = "6B6B330542754F558D8643323BDFFAB6";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

  laptop: `/request?api_key=${API_KEY}&type=search&amazon_domain=amazon.com&search_term=tablet&category_id=2335753011`,
};

export default requests;

// http://api.themoviedb.org/3/trending/all/week?api_key=6397e568abeae0615f1b6dc15a1aea19&language=en-US

// 6397e568abeae0615f1b6dc15a1aea19

// http://api.themoviedb.org/3/

// trending/all/week?api_key=6397e568abeae0615f1b6dc15a1aea19&language=en-US
