import React from 'react';
import BookCard from './BookCard'
const BookList = (props) => {
	return (
		<div className="list">
			{
				props.books.map((book, i) => {
					return <BookCard
						key = {i}
						title={book.title }
						author={book.authors}
						rating={book.average_rating}
						price={book.price}
					/>
				})
			}
		</div>
	)
}

export default BookList;