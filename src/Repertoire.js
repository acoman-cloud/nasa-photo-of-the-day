import React from 'react';
import styled from 'styled-components';

const StyledRecycle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0% 5%;
	width: 90%;
	h3{
		color: #CAF0F8;
	}
	p{
		background-color: #CAF0F8;
		padding: 5%;
		color: #0077B6;
	}
`

const Repertoire = ({nasa}) =>{
	return(
		<StyledRecycle>
			<h3>Taken: {nasa.date}</h3>
			<p>
				{nasa.explanation}
			</p>
				{ nasa.copyright ? `© ${nasa.copyright}` : '© anonymous' }
		</StyledRecycle>
	)
}

export default Repertoire;
