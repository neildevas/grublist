import React, { useState } from 'react';
import { useJsApiLoader, Autocomplete, StandaloneSearchBox } from '@react-google-maps/api'

const SideBar: React.FC = () => {
  const [autocomplete, setAutocomplete] = useState(null);
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyD8mBsmIMZf0tr6COrYV1KShJjkcnVtzDk',
    libraries: ['places']
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('TYPED', e.target.value);
  };
  const onLoad =  (autocompleteInstance) => {
    console.log('autocomplete: ', autocomplete);
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
    <div className='w-full rounded-2xl p-3 bg-white flex flex-row justify-between items-center shadow-sm'>
      <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad}>
        <input placeholder='Search' className='w-full outline-none' onChange={onChange} />
      </Autocomplete>
      <button className='focus:outline-none' type='button'>
        <i className='fas fa-search'/>
      </button>
    </div>
  );
};

export default SideBar;