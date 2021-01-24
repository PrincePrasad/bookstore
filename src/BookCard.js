import React from 'react';
import './App.css';

const BookCard = (props) => {
	return (
		<div className="card-container">
			<div className="desc">
				<h2>{props.title }</h2>
				<h3>{props.author }</h3>
				<h3>{props.price}</h3>
				<h3>{ props.rating}</h3>
			</div>
		</div>
	)
}

export default BookCard;