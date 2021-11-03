import axios from "axios";
import React, { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from './constants/index';
import Recycle from './Recycle'

import "./App.css";

function App() {
  const [nasa, setNasa] = useState('')
  
  useEffect(()=>{
    axios.get(`${BASE_URL}api_key=${API_KEY}`)
      .then(esp =>{
        setNasa(esp.data);
      })
      .catch(err=>{
        console.error(err);
      })
  }, [])

  return (
    <div className="App">
      <h1>
        NASA Photo of the Day! It has the popular appeal of a Justin Bieber video!<span role="img" aria-label='go!'>🚀</span>!
      </h1>
      <h2>{nasa.title}</h2>
      <Recycle nasa={nasa}/>
    </div>
  );
}

export default App;
