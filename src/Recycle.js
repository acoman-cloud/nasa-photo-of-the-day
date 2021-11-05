import React, { useState } from 'react';
import './index.css' 
import styled, { keyframes } from 'styled-components';

const kfp = keyframes`
	0%{
		transform: rotate(0);
	}
	100%{
    	transform: rotate(360DEG);
  	}
`

const StyledRecycle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0% 5%;
	width: 90%;
		text-align:center;
	img{
		width: 90%;
		height 90%;
		
	}
	h1{
		color: #023E8A;
	}
	h2{
		color: #03045E;
	}
	p{
		color: #0096C7;
	}
`
const StyledDiv = styled.div`
	
  	transform: rotateZ(0DEG);
  	animation: .7s linear .5s infinite normal none running ${kfp};
`
const StyledSpan = styled.span`
	display: flex;
	justify-content:center;
`

const Recycle = ({nasa, changeInput}) => {

	return (
		<StyledRecycle>
			<h1>
        		NASA Photo of the Day! It has the popular<StyledSpan><StyledDiv>🚀</StyledDiv>appeal of a Justin Bieber video!<StyledDiv>🚀</StyledDiv></StyledSpan>
      		</h1>
      		{nasa.copyright ? <h2>{nasa.title} <br />by {nasa.copyright}</h2> : <h2>{nasa.title}</h2>}
			{nasa ? nasa.hdurl ? <img onClick="transform: scale(2)" src={nasa.hdurl} alt={nasa.explanation}/> : <p>Sorry no pic... 👋Imagine👋</p> : <h2>Loading... pls be patient<h1><StyledDiv>↻</StyledDiv></h1></h2>}
		</StyledRecycle>
	)
}

export default Recycle;
