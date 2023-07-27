import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Api from './Api';
import css from './home.module.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const data = await Api.getTrendingMovies();
      setTrendingMovies(data.results);
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1 className={css.trending}>Trending Movies</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li className={css.movie} key={movie.id}>
            <Link className={css.link} to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
