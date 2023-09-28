
import './App.css';


import Navbar from './component/Navbar/Navbar';
import Banner from './component/Banner/Banner';
import Rowpost from './component/Rowpost/Rowpost';
import React from 'react';
import { original,action, comedy, romantic, horror } from './constants/urls';


function App() {
 
 
  return (
    <div className="App">
      
      
      <Navbar/>
      <Banner/>
      <Rowpost url={original} title='Netflix Originals'  />
      <Rowpost url={action} title='Action' isSmall />
      <Rowpost url={comedy} title='Comedy' isSmall />
      <Rowpost url={romantic} title='Romantic' isSmall />
      <Rowpost url={horror} title='Horror' isSmall />
      
      
      
    </div>
  );
}

export default App;



