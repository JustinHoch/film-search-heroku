// React Components
import { useState, useEffect } from 'react';

// API
import { fetchTrendingMedia } from '../services/api';

// Components
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';
import TvCard from '../components/TvCard';
import PersonCard from '../components/PersonCard';

function HomePage() {

  // States
  const [trendingMedia, setTrendingMedia] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);  
  
  // On page load get trending media
  useEffect(() => { 
    const getTrendingMedia = async () => {
      const media = await fetchTrendingMedia();
      setTrendingMedia(media);
      setIsLoaded(true);
    }
    getTrendingMedia();
  }, []);

  // Render
  if(!isLoaded){
    return (
      <Loading />
    )
  } else {
    // console.log(trendingMedia);
    const results = trendingMedia.results;
    return (
      <main className="bg-gray-600">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-green-500 text-center p-2">Trending Media</h2>
          <div className="p-1 flex flex-wrap justify-center">
            {/* TODO: Learn more about using conditionals in map (without return true I get a warning) */}
            {results.map(media => {
              if(media.media_type === "movie"){
                return <MovieCard key={media.id} media={media} />
              } else if(media.media_type === "tv"){
                return <TvCard key={media.id} media={media} />
              } else if(media.media_type === "person"){
                return <PersonCard key={media.id} media={media} />
              }
              return true;
            })}
          </div>
        </div>
      </main>
    )
  }
};

export default HomePage;
