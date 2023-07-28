import axios from 'axios';

const apiKey = '7f4ba582d55c3d33bf97672c5d45e075';

const Api = {
  getTrendingMovies: async () => {
    try {
      const apiUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching trending movies:', error);
      return [];
    }
  },

  searchMovies: async query => {
    try {
      const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      console.error('Error searching movies:', error);
      return [];
    }
  },

  getMovieDetails: async movieId => {
    try {
      const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching movie details:', error);
      return null;
    }
  },

  getMovieCredits: async movieId => {
    try {
      const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`;
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching movie credits:', error);
      return [];
    }
  },

  getMovieReviews: async movieId => {
    try {
      const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`;
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching movie reviews:', error);
      return [];
    }
  },
};

export default Api;
