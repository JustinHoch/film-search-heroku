// React Components
import { useState } from 'react'
import { useHistory } from "react-router";

function SearchBar() {

  // State
  const [query, setQuery] = useState('');

  // History
  const history = useHistory()

  // On Search Submit
  const onSubmit = (e) => {
    // prevent page reload
    e.preventDefault()

    // Do nothing if there is no query string
    if(!query){
      return;
    }

    // Redirect to search page
    history.push(`/search/${query}`)

    // Reset form after redirect
    let form = document.getElementById("search-form")
    form.reset()
  }

  return (
    <div className="mt-4 rounded">
      <form className="max-w-3xl" id="search-form" onSubmit={onSubmit}>

        <label className="hidden" htmlFor="search-input">Search Media or Person</label>
        <input id="search-input" className="w-4/5 rounded-l pl-1 focus:outline-none" type="text" placeholder="Search Media or Person" onChange={(e) => setQuery(e.target.value)}></input>

        <button className="w-1/5 bg-green-600 text-white rounded-r" type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchBar
