import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { BASE_URL, API_KEY } from './constants/index';

import Recycle from './Recycle'
import Repertoire from './Repertoire';

document.querySelector('html').style.background='#48CAE4';

const StyledApp = styled.div`
  display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0% 5%;
	width: 90%;
`

function App() {
  const [nasa, setNasa] = useState('')
  const [date, setDate] = useState('')

  const changeInput = (start, end) =>{
		const year = Math.floor(Math.random()*26+1996);
    const month = Math.floor(Math.random()*12+1);
    const day = month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12
      ? Math.floor(Math.random()*31+1)
      : month === 4 || month === 6 || month === 9 || month === 11
        ? Math.floor(Math.random()*30+1)
        : Math.floor(Math.random()*28+1)
    setDate(`${year}-${month}-${day}`)
	}
  
  useEffect(()=>{
    axios.get(`${BASE_URL}api_key=${API_KEY}&date=${date}`)
      .then(esp =>{
        setNasa(esp.data);
      })
      .catch(err=>{
        console.error(err);
      })
  }, [date])

  return (
    <StyledApp className="App">
      <Recycle nasa={nasa} date={date} changeInput={changeInput} />
      <br />
			<button onClick={changeInput}>Random!</button> <br />
			<input type="date" />
      <Repertoire nasa={nasa} />
    </StyledApp>
  );
}

export default App;
