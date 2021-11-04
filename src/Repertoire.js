import React from 'react';


const Repertoire = ({nasa}) =>{

	return(
		<>
			<h3>Taken: {nasa.date}</h3>
			<p>
				{nasa.explanation}
			</p>
			<p>
				<span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> {nasa.copyright}
			</p>
		</>	
	)
}

export default Repertoire;