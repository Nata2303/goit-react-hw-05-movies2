import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';
import { Link } from 'react-router-dom';
import css from './home.module.css'

const App = () => {
  return (
    <Router>
      <nav className={css.item}>
        {/* Посилання на сторінку Home */}
        <Link className={css.titel} to="/">
          HOME
        </Link>
        {/* Посилання на сторінку Movies */}
        <Link className={css.titel} to="/movies">
          MOVIE
        </Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          {/* Redirect to Home if route is not found */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
