import React, { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import css from './Home/home.module.css';

const Home = React.lazy(() => import('./Home/Home'));
const Movies = React.lazy(() => import('./Movies/Movies'));
const MovieDetails = React.lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = React.lazy(() => import('./Cast/Cast'));
const Reviews = React.lazy(() => import('./Reviews/Reviews'));

const App = () => {
  return (
    <div>
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
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          {/* Redirect to Home if route is not found */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
