import PersonCard from "./PersonCard"

function Cast({ cast }) {
  return (
    <>
      <h2 className="text-xl font-bold text-green-500 text-center">Cast</h2>
      <div className="p-2 flex flex-wrap justify-center">
        {cast.map((person, key)=>{
          return <PersonCard key={key} media={person} />
        })}
      </div>
    </>
  )
}

export default Cast
