function ProvidersList({ providers, type }) {
  return (
    <>
      <h3 className="text-md font-bold text-white">{type}</h3>
      <div className="flex flex-wrap justify-start">
        {providers.map((element, key)=>{
          const logoPath = `http://image.tmdb.org/t/p/w300${element.logo_path}`
          return (
            <div className="w-16 m-2" key={key}>
              <img className="rounded-lg" src={logoPath} alt=""></img>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default ProvidersList
