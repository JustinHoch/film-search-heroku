// REACT COMPONENTS
import { useState, useEffect } from 'react';

// API
import { fetchMovie } from '../services/api';

// COMPONENTS
import Loading from '../components/Loading';
import MoviePageDetails from '../components/MoviePageDetails';
import WatchProviders from '../components/WatchProviders';
import Cast from '../components/Cast';
import LongText from '../components/LongText'

// RENDER PAGE
function MoviePage({ match }) {
  // Get movie ID from URL
  const movieId = match.params.name;

  // State
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // UseEffect
  useEffect(() => {
    const getMovieDetails = async () => {
      const movie = await fetchMovie(movieId);
      setMovieDetails(movie);
      setIsLoaded(true);
    }
    getMovieDetails();
  }, [movieId]);

  // Check if movie info is loaded
  if(!isLoaded){
    return (
      <Loading />
    )
  // Render if movie info is loaded
  } else {

    return (
      <main className="bg-gray-600">
        <div className="max-w-3xl mx-auto">

        <MoviePageDetails
          poster={movieDetails.poster_path}
          title={movieDetails.title}
          runtime={movieDetails.runtime}
          certifications={movieDetails.release_dates}
          genres={movieDetails.genres}
        />

        {movieDetails.overview ? <LongText heading='Overview' text={movieDetails.overview} /> : null}

        <WatchProviders watchProviders={movieDetails["watch/providers"]} />

        <Cast cast={movieDetails.credits.cast} />
        </div>
      </main>
    )
  }
}

export default MoviePage
