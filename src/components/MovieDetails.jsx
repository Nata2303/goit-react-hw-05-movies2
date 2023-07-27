import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from './Api';
import Cast from './Cast';
import Reviews from './Reviews';
import css from './movieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [isCastVisible, setIsCastVisible] = useState(false);
    const [isReviewsVisible, setIsReviewsVisible] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await Api.getMovieDetails(movieId);
      setMovieDetails(data);
    };

    const fetchMovieCredits = async () => {
      const creditsData = await Api.getMovieCredits(movieId);
      setCast(creditsData.cast);
    };

    const fetchMovieReviews = async () => {
      const reviewsData = await Api.getMovieReviews(movieId);
      setReviews(reviewsData.results);
    };

    fetchMovieDetails();
    fetchMovieCredits();
    fetchMovieReviews();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }
    
    const { title, vote_average, overview, genres } = movieDetails;
    const userScorePercentage = (vote_average * 10).toLocaleString(undefined, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
    });
    
    const handleCastClick = () => {
    setIsCastVisible(!isCastVisible);
  };

const handleReviewsClick = () => {
  setIsReviewsVisible(!isReviewsVisible);
};

  return (
    <div>
      <div className={css.cardfilm}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
          width="250"
        />
        <div className={css.details}>
          <h1>{title}</h1>
          <p className={css.userscore}>User Score: {userScorePercentage}%</p>
          <p className={css.overview}>Overview: {overview}</p>
          <p>Genres: {genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
      {/* Collapsible Cast section */}
      <h3 onClick={handleCastClick}>Cast</h3>
      {isCastVisible && <Cast cast={cast} />}

      {/* Collapsible Reviews section */}
      <h3 onClick={handleReviewsClick}>Reviews</h3>
      {isReviewsVisible && <Reviews reviews={reviews} />}
    </div>
  );
};

export default MovieDetails;
