import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Api from '../../Api';
import css from './movies.module.css';

const Movies = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchSubmit = useCallback(
    async event => {
      event.preventDefault();
      try {
        const data = await Api.searchMovies(searchQuery);
        setSearchResults(data.results);
        // Обновление URL с поисковым запросом
        navigate(`?query=${searchQuery}`);
      } catch (error) {
        console.error('Error searching movies:', error);
        setSearchResults([]);
      }
    },
    [searchQuery, navigate]
  );

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const query = queryParams.get('query');
    if (query) {
      setSearchQuery(query);
      handleSearchSubmit();
    }
  }, [handleSearchSubmit]);
  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={event => setSearchQuery(event.target.value)}
          placeholder="Enter movie title..."
        />
        <button className={css.search} type="submit">
          Search
        </button>
      </form>

      {/* Display search results */}
      <ul>
        {searchResults.map(movie => (
          <li className={css.movie} key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
