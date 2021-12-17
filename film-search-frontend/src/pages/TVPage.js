// REACT COMPONENTS
import { useState, useEffect } from 'react'

// API
import { fetchTV } from '../services/api'

// COMPONENTS
import Loading from '../components/Loading'
import TvPageDetails from '../components/TvPageDetails'
import LongText from '../components/LongText'
import WatchProviders from '../components/WatchProviders'
import Cast from '../components/Cast'

// RENDER PAGE
function TVPage({ match }) {

  // Get TV id from URL
  const tvId = match.params.name

  // State
  const [tvDetails, setTvDetails] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  // UseEffect
  useEffect(() => {
    const getTvDetails = async () => {
      const tv = await fetchTV(tvId)
      setTvDetails(tv)
      setIsLoaded(true)
    }
    getTvDetails()
  }, [tvId])

  // Check if TV info is loaded
  if(!isLoaded){
    return (
      <Loading />
    )
  } else {
    return (
      <main className="bg-gray-600">
        <div className="max-w-3xl mx-auto">

          <TvPageDetails
            poster={tvDetails.poster_path}
            title={tvDetails.name}
            contentRating={tvDetails.content_ratings.results}
            runtime={tvDetails.episode_run_time}
            numberOfSeasons={tvDetails.number_of_seasons}
            genres={tvDetails.genres}
          />

          {tvDetails.overview ? <LongText heading='Overview' text={tvDetails.overview} /> : null}

          <WatchProviders watchProviders={tvDetails["watch/providers"]} />

          <Cast cast={tvDetails.credits.cast} />
          
        </div>
      </main>
    )
  }
}

export default TVPage
