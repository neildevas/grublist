import React from 'react'
import './App.css'
import HelloWorld from './HelloWorld'
import Map from './Map';

function App() {
  return (
    <div className='App bg-gray-50'>
      <header className='App-header'>
        {/*<HelloWorld text='World!' />*/}
        <Map/>
      </header>
    </div>
  )
}

export default App
