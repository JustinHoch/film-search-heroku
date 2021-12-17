// COMPONENTS
import Genres from "./Genres"

// FUNCTIONS
import { getCerts } from '../services/functions'

// Missing image
import missingImage from '../assets/missing-image.jpg';

function MoviePageDetails({ poster, title, runtime, certifications, genres }) {

  // Get US certifications
  const cert = getCerts(certifications);

  // Check for missing image
  let smPosterPath = missingImage;
  if(poster){
    smPosterPath = `http://image.tmdb.org/t/p/w342${poster}`;
  }

  return (
    <div className="p-2 flex">
      <img className="rounded w-44 mr-2" src={smPosterPath} alt="" />
      <div>
        <h2 className="text-xl font-bold text-green-500">{title}</h2>
        <p className="text-white mt-2">Runtime: {runtime}min</p>
        <p className="text-white mt-2">Rating: {cert}</p>
        <Genres genres={genres} />
      </div>
    </div>
  )
}

export default MoviePageDetails
