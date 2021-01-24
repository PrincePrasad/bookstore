import React from 'react';

const SearchBooks = (props) => {
	return (
		<div className="search-books">
			<form onSubmit={props.bookSearch} action="">
				<input onChange={props.handleSearch } type="text"></input>
				<button type="submit">Search</button>
				<select defaultValue="Sort" onChange={props.handleSort }>
					<option disabled value="Sort" >Sort</option>
					<option value="Ratings" >Ratings</option>
					<option value="Price" >Price</option>
				</select>
			</form>

		</div>
	)
}

export default SearchBooks;