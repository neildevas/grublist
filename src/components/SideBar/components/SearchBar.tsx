import React, {useEffect, useState} from 'react';
import { useJsApiLoader, Autocomplete, StandaloneSearchBox, useGoogleMap } from '@react-google-maps/api'
// import AutocompleteService = google.maps.places.AutocompleteService;
import { Libraries } from '@react-google-maps/api/dist/utils/make-load-script-url';

const LIBRARIES: Libraries = ['places'];
const API_KEY = 'AIzaSyD8mBsmIMZf0tr6COrYV1KShJjkcnVtzDk';

const SideBar: React.FC = () => {
  const [autocompleteService, setAutocompleteService] = useState(null);
  const [predictionError, setPredictionError] = useState<null | string>(null);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: API_KEY,
    libraries: LIBRARIES,
  });

  const { google } = window;

  useEffect(() => {
    if (google) {
      setAutocompleteService(new google.maps.places.AutocompleteService());
    }
  }, [google]);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (autocompleteService) {
        autocompleteService.getPlacePredictions({input: e.target.value}, (res) => {
          console.log('PREDICTIONS', res);
        });
      }
    } catch (err) {
      setPredictionError(err)
    }

  };

  if (!isLoaded || loadError) {
    return <div>{loadError}</div>
  }

  return (
    <div className='w-full rounded-2xl p-3 bg-white flex flex-row justify-between items-center shadow-sm relative'>
      {/* <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad} className='w-72 bg-blue-200'> */}
      <input placeholder='Search' className='w-full outline-none' onChange={onChange} />
      {/* </Autocomplete> */}
      <button className='focus:outline-none' type='button'>
        <i className='fas fa-search'/>
      </button>
    </div>
  );
};

export default SideBar;