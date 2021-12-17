// React Components
import { useState, useEffect } from 'react'

// API
import { fetchPerson } from '../services/api'

// Components
import Loading from '../components/Loading'
import PersonPageDetails from '../components/PersonPageDetails'
import LongText from '../components/LongText'
import KnownFor from '../components/KnownFor'

function PersonPage({ match }) {
  // Get movie ID from URL
  const personId = match.params.name

  // State
  const [personDetails, setPersonDetails] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  // UseEffect
  useEffect(() => {
    const getPersonDetails = async () => {
      const person = await fetchPerson(personId)
      setPersonDetails(person)
      setIsLoaded(true)
    }
    getPersonDetails()
  }, [personId])

  // Check if movie info is loaded
  if(!isLoaded){
    return (
      <Loading />
    )
  // Render if movie info is loaded
  } else {

    const knownForByPopularity = personDetails.combined_credits.cast.sort((a, b) => {
      return b.popularity - a.popularity
    })

    return (
      <main className="bg-gray-600">
        <div className="max-w-3xl mx-auto">
          <PersonPageDetails
            poster={personDetails.profile_path}
            name={personDetails.name}
            genderNum={personDetails.gender}
            birthday={personDetails.birthday}
            deathday={personDetails.deathday}
            place_of_birth={personDetails.place_of_birth}
          />

          {personDetails.biography ? <LongText heading='Biography' text={personDetails.biography} /> : null}

          <KnownFor knownFor={knownForByPopularity} />
        </div>
      </main>
    )
  }
}

export default PersonPage
