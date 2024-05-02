import React from 'react'
import './App.css'
import DataComponent from './components/DataComponent'

function App(){
  const imageData = DataComponent()

  return(
    <>
    <h1 className='title'>Kalvium Gallery</h1>
    <div className="main">
      {
        imageData.map((img)=>(
          <div key={img.id} className="image-container">
            <img src={img.img} alt="elephant" className="gallery-image"/>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default App