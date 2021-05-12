import React from 'react'
import './App.css'
import Map from './components/Map';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className='bg-gray-100 flex flex-row'>
      <div className='w-2/7 h-screen'>
        <SideBar text='Sidebar' />
      </div>
      <div className='flex-1'>
        <Map />
      </div>
    </div>
  )
}

export default App
