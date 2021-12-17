// REACT COMPONENTS
import { Link } from "react-router-dom"

// Missing image
import missingImage from '../assets/missing-image.jpg';

function PersonCard({media}) {

  // Check for missing image
  let smPosterPath = missingImage;
  if(media.profile_path){
    smPosterPath = `http://image.tmdb.org/t/p/w342${media.profile_path}`;
  }

  return (
    <div className="w-40 m-2 shadow-lg rounded bg-gray-800 transition duration-150 transform hover:scale-105">
      <Link to={`/person/${media.id}`}>
        <img className="rounded-t" src={smPosterPath} alt="" />
      </Link>
      <div className="p-1 text-white">
        <h3 className="font-bold text-green-500">{media.name}</h3>
        {media.character ? (
          <p>{media.character}</p>
        ):null}
      </div>
    </div>
  )
}

export default PersonCard
