import axios from "axios";
import React, { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from './constants/index';
import Recycle from './Recycle'

function App() {
  const [nasa, setNasa] = useState('')
  const [date, setDate] = useState('')

  const changeInput = evt =>{
		const { value } = evt.target;
		setDate(value);
	}
  
  useEffect(()=>{
    axios.get(`${BASE_URL}api_key=${API_KEY}&date=${date}`)
      .then(esp =>{
        setNasa(esp.data);
        setDate(esp.data.date);
      })
      .catch(err=>{
        console.error(err);
      })
  }, [])

  return (
    <div className="App">
      <Recycle nasa={nasa} date={date} changeInput={changeInput}/>
    </div>
  );
}

export default App;
