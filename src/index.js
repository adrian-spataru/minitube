import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';

class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div>
            <SearchBar />
        </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('render-target'));
