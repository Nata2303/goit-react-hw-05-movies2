import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../Api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      const data = await Api.getMovieCredits(movieId);
      setCast(data.cast);
    };

    fetchMovieCast();
  }, [movieId]);

  return (
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
  );
};

export default Cast;
