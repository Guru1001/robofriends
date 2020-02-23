import React from 'react';
import './Scroll.css';

const Scroll = (props) =>{
	return (
		<div style={{ overflow:'scroll',height:'80vh'}}>
			{props.children}
		</div>
	);
}

export default Scroll;