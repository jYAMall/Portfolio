
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import About from './components/About';
import Skills from './components/Skills';



function App() {
  return (
    
    <h1 className="text-3xl font-bold">
      < Navbar/>
      < Body/>
      < About/>
      < Skills/>
     
    </h1>
  );
}

export default App;
