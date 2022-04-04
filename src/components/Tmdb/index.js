const API_KEY = 'ee3d630c06a92a8dc4429e988b562b28';
const API_BASE = 'https://api.themoviedb.org/3';


const fetchMovies = async (endpoint) => {
  const response = await fetch(`${API_BASE}${endpoint}`);
  return await response.json();
};


const Tmdb = {
  getHomeList: async () => ([
    {
      slug: 'originals',
      title: 'Originais da Netflix',
      items: await fetchMovies(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
    },
    {
      slug: 'trending',
      title: 'Recomendados para Você',
      items: await fetchMovies(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
    },
    {
      slug: 'toprated',
      title: 'Em Alta',
      items: await fetchMovies(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
    },
    {
      slug: 'action',
      title: 'Ação',
      items: await fetchMovies(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
    },
    {
      slug: 'comedy',
      title: 'Comédia',
      items: await fetchMovies(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
    },
    {
      slug: 'drama',
      title: 'Drama',
      items: await fetchMovies(`/discover/movie?with_genres=18&language=pt-BR&api_key=${API_KEY}`)
    },
    {
      slug: 'romance',
      title: 'Romance',
      items: await fetchMovies(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
    },
    {
      slug: 'horror',
      title: 'Terror',
      items: await fetchMovies(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
    },
  ]),
  getMovieInfo: async (movieId, type) => {
    let info = {};
    
    if(movieId) {
      switch(type) {
        case 'movie':
          info = await fetchMovies(`/movies/${movieId}?language=pt-BR&api_key=${API_KEY}`);
        break;
        case 'tv':
          info = await fetchMovies(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
        break;
        default:
          info = null;
          break;
      }
    }
    
    return info;
  }
};

export default Tmdb;
