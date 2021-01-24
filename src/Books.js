import React, { Component } from 'react';
import SearchBooks from './SearchBooks'
import request from 'superagent';
import BookList from './BookList';

class Books extends Component {

	constructor(props) {
		super(props);
		this.state = {
			books: [],
			searchField: '',
			sort:''
		}
	}
	
	bookSearch = (e) => {
		e.preventDefault();
		request
			.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json")
			.query({ q: this.state.searchField })
			.then((data) => {
				console.log(data);
				this.setState({books: [...data.body]})
			})
	}

	handleSearch = (e) => {
		this.setState({searchField: e.target.value})
	}
	
	handleSort = (e) => {
		console.log(e.target.value);
		this.setState({sort: e.target.value})
	}

	// cleanData = (data) => {
	// 	const cleanedData = data.body.map((book) => {
	// 		if(book)
	// 	})
	// }

	render() {
		const sortedBooks = this.state.books.sort((a, b) => {
			if (this.state.sort === "Rating") {
				return parseInt(b.average_rating);
			}
			else if (this.state.sort === "Price") {
				return parseInt(a.price);
			}
		})
		return (
			<div>
				<SearchBooks bookSearch={this.bookSearch} handleSearch={this.handleSearch}
				handleSort={this.handleSort}
				/>
				<BookList books={sortedBooks}/>
			</div>
		);
	}
}

export default Books;
