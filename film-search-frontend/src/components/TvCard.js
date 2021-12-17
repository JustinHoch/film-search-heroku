// REACT COMPONENTS
import { Link } from "react-router-dom"

// Missing image
import missingImage from '../assets/missing-image.jpg'

function TvCard({media}) {

  // Check for missing image
  let smPosterPath = missingImage;
  if(media.poster_path){
    smPosterPath = `http://image.tmdb.org/t/p/w342${media.poster_path}`;
  }
  
  return (
    <div className="w-40 m-2 shadow-lg rounded bg-gray-800 transition duration-150 transform hover:scale-105">
      <Link to={`/tv/${media.id}`}>
        <img className="rounded-t" src={smPosterPath} alt="" />
      </Link>
      <div className="p-1 text-white">
        <h3 className="font-bold text-green-500">{media.name}</h3>
        <p>TV Show</p>
        <p className="font-light text-sm">Release Date: {media.first_air_date}</p>
      </div>
    </div>
  )
}

export default TvCard
