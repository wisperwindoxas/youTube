import React from 'react'
import Header from './Components/Header/Header';
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import WatchVideo from './Components/watch/WatchVideo';

function App() {
  return (

        <div className="App">
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>} excat/>
            <Route path="/watch/:id" element={<WatchVideo/>} excat />
          </Routes>
          
      </div>
  );
}

export default App;
