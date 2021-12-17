// Function to get a single certification from Movie or Tv query
export function getCerts(details){
  const certs = details.results.filter(cert => cert.iso_3166_1 === 'US');
  const cert = [];
  if(certs[0]){
    certs[0].release_dates.forEach(element => {
      if(element.certification !== ""){
        cert.push(element.certification);
      };
    });
    if(cert.length > 0){
      return cert[0];
    }else{
      return "N/A";
    };
  }else{
    return "N/A";
  }
}

// Function to check for US watch providers
export function getWatchProviders(details){
  const providers = details.results;
  if(providers["US"]){
    const providersList = providers["US"];
    delete providersList.link;
    return providersList;
  }else{
    return false;
  };
}