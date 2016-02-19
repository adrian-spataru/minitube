import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { term: "" };

    }

    render(){

        return(
            <div className="ui fluid icon input">
                <input type="text" placeholder="Search..." />
                <i className="search icon"></i>
            </div>
        );
    }
}

export default SearchBar;