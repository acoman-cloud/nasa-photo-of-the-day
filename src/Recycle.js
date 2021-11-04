import React, { useEffect } from 'react';
import Repertoire from './Repertoire';
import './index.css' 
import styled, { keyframes } from 'styled-components';

const kfp = keyframes`
	0%{

	}
	50%{

	}
	100%{
    	transform: rotateZ(360DEG);
  	}
`

const StyledRecycle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0% 5%;
	background-color: white;
	width: 90%;
	text-align: center;
	img{
		width: 50%;
		height 50%;
		
	}
`
const StyledDiv = styled.div`
	
  	transform: rotateZ(0DEG);
  	animation: 2s linear .5s infinite normal none running ${kfp};
`
const StyledSpan = styled.span`
	display: flex;
	justify-content:center;
`

	//document.querySelector('img').addEventListener('click' );

const Recycle = ({nasa, changeInput}) => {
	return (
		<StyledRecycle>
			<h1>
        		NASA Photo of the Day! It has the popular<StyledSpan>appeal of a Justin Bieber video!<StyledDiv>🚀</StyledDiv>!</StyledSpan>
      		</h1>
      		<h2>{nasa.title}</h2>
			{nasa ? <img src={nasa.url} alt={nasa.explanation}/> : <p>Loading... pls be patient</p>}
			<div>
				<button onClick={changeInput}>Random!</button>
				<Repertoire nasa={nasa} />
			</div>
		</StyledRecycle>
	)
}

export default Recycle;
