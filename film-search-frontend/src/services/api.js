const apiKey = process.env.REACT_APP_TMDB_API_KEY;

// Trending Media
export async function fetchTrendingMedia(){
  const res = await fetch(`/api/trending-media`);
  const data = await res.json();
  return data;
}

// Movie
export async function fetchMovie(id){
  const res = await fetch(`/api/movie/${id}`);
  const data = await res.json();
  return data;
}

// TV
export async function fetchTV(id){
  const res = await fetch(`/api/tv/${id}`);
  const data = await res.json();
  return data;
}

// Person
export async function fetchPerson(id){
  const res = await fetch(`/api/person/${id}`);
  const data = await res.json();
  return data;
}

// Search (Milti-Search)
export async function fetchMultiSearch(query){
  const res = await fetch(`/api/search/${query}`);
  const data = await res.json();
  return data;
}