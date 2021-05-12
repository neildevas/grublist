import React from 'react';

const SideBar: React.FC = () => (
  <div className='w-full rounded-2xl p-3 bg-white flex flex-row justify-between items-center shadow-sm'>
    <input placeholder='Search' className='w-full outline-none'/>
    {/* <p className='text-sm text-gray-500'>Search</p> */}
    <button className='focus:outline-none' type='button'>
      <i className='fas fa-search'/>
    </button>
  </div>
);

export default SideBar;