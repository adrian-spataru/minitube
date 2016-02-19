import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import YTSearch from 'youtube-api-search';
import EmbedVideo from './components/embed-video';

const API_KEY = "AIzaSyBCvy6nZxJep2z93GVyK4ProQeAMQ9ClDk";


class App extends Component{
    constructor(props){
        super(props);

        this.state = { selectedVideo: null};
        this.searchQuery("developers");//used as a default value
    }

    searchQuery(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({selectedVideo: videos[0]}); // We will display for the moment only the first video
            console.log(this.state.selectedVideo); // Used for Debugging
        });
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
                    <SearchBar onQueryChange={term => this.searchQuery(term)} />
                </div>
                <div className="column centered aligned row ">
                    <EmbedVideo video={this.state.selectedVideo} />
                </div>
            </div>


        );
    }
}


ReactDOM.render(<App />, document.getElementById('render-target'));
