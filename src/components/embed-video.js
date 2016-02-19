import React, { Component } from 'react';

class EmbedVideo extends Component {
    constructor(props){
        super(props);

    }

    render(){
        if(!this.props.video){
            return(
            <div>
                <div className="ui text loader">Loading...</div>
            </div>
            );
        }

        let videoId = this.props.video.id.videoId;
        let url = `http://www.youtube.com/embed/${videoId}`;
        return(
            <iframe frameBorder="0" className="ui iframe" src={url}>
            </iframe>
        );
    }
}

export default EmbedVideo;