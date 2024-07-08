import axios from 'axios';

const API_KEY = '17b599635057fd5cea00bf4b4d924ecc';
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovies = async (query: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: query,
        language: 'es-ES', 
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};

export const getMovieDetails = async (movieId: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
        language: 'es-ES'
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

export const getSimilarMovies = async (movieId: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/similar`, {
      params: {
        api_key: API_KEY,
        language: 'es-ES', 
      },
    });
    return response.data.results.slice(0, 3); 
  } catch (error) {
    console.error('Error fetching similar movies:', error);
    return [];
  }
};

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        language: 'es-ES', 
      },
    });
    return response.data.results.slice(0, 8); 
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};