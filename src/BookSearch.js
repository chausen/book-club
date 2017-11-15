import React, { Component } from 'react';
import './BookSearch.css';

class BookSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {bookName: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({bookName: event.target.value});
    }

    handleSubmit(event) {

    }

    render() {
        return (
            <div className="Book-search">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Search for books:
                        <input type="text" value={this.state.bookName} onChange={this.handleChange} 
                            className="Book-search-input" 
                        />
                    </label>
                    <input type="submit" value="Select" />
                </form>
            </div>
        );
    }
}

export default BookSearch;