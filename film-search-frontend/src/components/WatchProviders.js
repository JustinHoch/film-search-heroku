// COMPONENTS
import ProvidersList from "./ProvidersList";

// FUNCTIONS
import { getWatchProviders } from "../services/functions";

// RENDER COMPONENT
function WatchProviders({ watchProviders }) {

  // Get US watch providers
  const providers = getWatchProviders(watchProviders)

  // If there are any US watch providers
  if(providers){
    return (
      <div className="p-2">
        <h2 className="text-lg font-bold text-green-500 text-center">Watch Providers</h2>

        {providers.flatrate !== undefined ? (
          <ProvidersList providers={providers.flatrate} type="Stream" />
        ):null}

        {providers.rent !== undefined ? (
          <ProvidersList providers={providers.rent} type="Rent" />
        ):null}

        {providers.buy !== undefined ? (
          <ProvidersList providers={providers.buy} type="Buy" />
        ):null}

      </div>
    )
  } else {
    return null;
  }
}

export default WatchProviders
