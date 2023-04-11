import React from 'react';
import './App.css';
import {getPictureOfTheDay} from './api';


function App() {  
  React.useEffect(() => {
    console.log('use effect')
    
    const getPicture = async () => {
      const response = await getPictureOfTheDay()
      console.log('response in useEffect', response)
    }

    getPicture()
  }, [])


  return (
    <div className="App">
      <h1>NASA Astronomy Picture of the Day</h1>
      <img src={''}></img>
    </div>
  );
}

export default App;
