import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {term: '' };

    }

    eentHandler(event){

        const a = event.target.value;
        this.setState({term: a});
        this.props.onQueryChange(this.state.term);
    }

    render(){

        return(
            <div className="ui fluid icon input">
                <input onChange={this.eentHandler} type="text" placeholder="Search..." />
                <i className="search icon"></i>
            </div>
        );
    }
}

export default SearchBar;