import React, { useState, useEffect } from 'react';
import Repertoire from './Repertoire';
import axios from "axios";
import { BASE_URL, API_KEY } from './constants/index';
import './index.css' 

const Recycle = ({nasa}) => {
	const [date, setDate] = useState('2021-11-03')

	const changeInput = evt =>{
		const { value } = evt.target;
		setDate(value);
	}

	  const reset = () => {
    setDate('');
  };

	useEffect(()=>{
    axios.get(`${BASE_URL}api_key=${API_KEY}&date=${date}`)
      .then()
      .catch(err=>{
        console.error(err);
      })
  }, [])
	return (
		<>
			
			{nasa ? <img src={nasa.hdurl} alt={nasa.explanation}/> : <p>Loading... pls be patient</p>}
			<div>
				<input /> <button id='resetInput' onClick={reset}>Reset</button>
				<Repertoire nasa={nasa} />
			</div>
		</>
	)
} 

export default Recycle;