import React from 'react';

const Card = (props) => {
	const {id,name,username,email} = props;
	return(
		<div className='bg-light-green dib br3 pa2 ma4 grow bw2 shadow-5'>
			<img src={`https://robohash.org/${username+id}?150x150`} alt='robodp'/>
			<div className='tc'>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;