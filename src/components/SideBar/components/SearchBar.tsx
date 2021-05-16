import React, { useState } from 'react';
import { useJsApiLoader, Autocomplete, StandaloneSearchBox, useGoogleMap } from '@react-google-maps/api'

const LIBRARIES = ['places'];
const SideBar: React.FC = () => {
  const [autocomplete, setAutocomplete] = useState(null);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyD8mBsmIMZf0tr6COrYV1KShJjkcnVtzDk',
    libraries: LIBRARIES,
  });

  const { google } = window;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('TYPED', e.target.value);
  };
  const onLoad =  (autocompleteInstance) => {
    setAutocomplete(autocompleteInstance)
  };
  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      console.log(autocomplete.getPlace())
    } else {
      console.log('Autocomplete is not loaded yet!')
    }
  };
  if (!isLoaded || loadError) {
    return <div>{loadError}</div>
  }
  return (
    <div className='w-full rounded-2xl p-3 bg-white flex flex-row justify-between items-center shadow-sm relative'>
      <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad} className='w-full bg-blue'>
        <input placeholder='Search' className='w-full outline-none' onChange={onChange} />
      </Autocomplete>
      <button className='focus:outline-none' type='button'>
        <i className='fas fa-search'/>
      </button>
    </div>
  );
};

export default SideBar;