import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: 'a' };
        console.log(this.state.term);


    }
    textHandler(term){
        this.setState({term});
        this.props.onQueryChange(term);
    }

    render(){

        return(
            <div className="ui fluid icon input">
                <input onChange={event => this.textHandler(event.target.value)} type="text" placeholder="Search..." />
                <i className="search icon"></i>

            </div>
        );
    }
}

export default SearchBar;