// Components
import Genres from "./Genres";

// Missing image
import missingImage from '../assets/missing-image.jpg';

function TvPageDetails({ poster, title, contentRating, runtime, numberOfSeasons, genres }) {

  // Get US rating
  let rating = "N/A"
  contentRating.forEach(element => {
    if(element.iso_3166_1 === "US"){
      rating = element.rating
    }
  });

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
        <p className="text-white mt-2">Rating: {rating}</p>
        <p className="text-white mt-2">Episode Runtime: {runtime}min</p>
        <p className="text-white mt-2">Seasons: {numberOfSeasons}</p>
        <Genres genres={genres} />
      </div>
    </div>
  )
}

export default TvPageDetails
