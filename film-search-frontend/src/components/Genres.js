function Genres({ genres }) {
  // TODO: Style genres
  return (
    <p className="text-white mt-2">Genres:&nbsp;
      {genres.map(genre => {
        return genre.name + " ";
      })}
    </p>
  )
}

export default Genres
