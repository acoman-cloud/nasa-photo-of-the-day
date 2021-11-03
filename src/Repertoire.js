import React from 'react';


const Repertoire = ({nasa}) =>{

	return(
		<>
			<h3>Taken: {nasa.date}</h3>
			<h3>
				<span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> {nasa.copyright}
			</h3>
		</>	
	)
}

export default Repertoire;