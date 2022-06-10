
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import About from './components/About';
import Skills from './components/Skills';
import Subscribe from './components/Subscribe';



function App() {
  return (
    
    <h1 className="text-3xl font-bold">
      < Navbar/>
      < Body/>
      < About/>
      < Skills/>
      < Subscribe/>
     
    </h1>
  );
}

export default App;
