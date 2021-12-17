// Components
import MovieCard from "./MovieCard"
import TvCard from "./TvCard"

function KnownFor({ knownFor }) {
  return (
    <>
      <h2 className="text-xl font-bold text-green-500 text-center">Known For</h2>
      <div className="p-2 flex flex-wrap justify-center">
        {/* TODO: Learn more about using conditionals in map (without return true I get a warning) */}
        {knownFor.map((media, key) => {
          if(media.media_type === "movie"){
            return <MovieCard key={key} media={media} />
          } else if(media.media_type === "tv"){
            return <TvCard key={key} media={media} />
          }
          return true;
        })}
      </div>
    </>
  )
}

export default KnownFor
