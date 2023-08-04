import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../Api';
// import css from '../MovieDetails/movieDetails.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isCastVisible, setIsCastVisible] = useState(false);

  useEffect(() => {
    const fetchMovieCast = async () => {
      const data = await Api.getMovieCredits(movieId);
      setCast(data.cast);
    };

    fetchMovieCast();
  }, [movieId]);

  const handleCastClick = () => {
    setIsCastVisible(!isCastVisible);
  };

  return (
    <div>
      {/* Collapsible Cast section */}
      <h3 onClick={handleCastClick}>Cast</h3>
      {isCastVisible && (
        <div>
          <h1>Cast</h1>
          {/* Display cast information */}
          {cast.map(actor => (
            <div key={actor.id}>
              <p>{actor.name}</p>
              {/* Check if actor's profile path is available before displaying the image */}
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                  width="150"
                />
              ) : (
                <p>No photo available</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cast;
