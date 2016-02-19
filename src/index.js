import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>Hello</div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('render-target'));
