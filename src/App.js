import React, { useEffect } from 'react';
import { render } from "react-dom";
import appcss from './appcss.css';
import {
  BrowserRouter as Router,
   Routes,
  Route
} from "react-router-dom";
import LoginScreen from './LoginScreen';
import Homescreen from './Homescreen';


function App(){

  return (
    <div className="App">
    <Router>
        <Routes><Route path="/" element={<LoginScreen/>} /></Routes>
         <Routes>
         <Route path="/home" element={<Homescreen />} />
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
