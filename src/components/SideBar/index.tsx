import React from 'react';
import SearchBar from './components/SearchBar';

interface Props {
  text: String;
}

const SideBar: React.FC<Props> = () => (
  <div className='py-5 px-3'>
    <SearchBar />
  </div>
);
export default SideBar;