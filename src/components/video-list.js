import React, { Component } from 'react';
import VideoListItem from './video-list-item';

class VideoList extends Component{
    constructor(props){
        super(props);

    }

    renderItems(){

        return this.props.videos.map((video) => {
            return (
                <VideoListItem onSelect={this.props.onSelect} key={video.etag} video={video} />
            );
        });

    }

    render(){
        return(
                <div className="ui items">
                    {this.renderItems()}
                </div>

        );
    }
}

export  default VideoList;
