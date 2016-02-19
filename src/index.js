import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';



class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(


            <div className="ui centered grid container">
                <div className="column centered aligned row">
                    <h1 id="logo" className="ui icon header">
                        <i className="youtube play small icon"></i> MiniTube
                    </h1>
                </div>
                <div className="six wide column ">
                    <SearchBar />
                </div>
            </div>


        );
    }
}


ReactDOM.render(<App />, document.getElementById('render-target'));
