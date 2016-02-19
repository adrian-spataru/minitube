import React, { Component } from 'react';

class VideoListItem extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(

            <div onClick={(event) => this.props.onSelect(this.props.video)}className="item">
                <div className="ui tiny image">
                    <img src={this.props.video.snippet.thumbnails.default.url} />
                </div>
                <div className="middle aligned content">
                    <p>{this.props.video.snippet.title}</p>
                </div>
            </div>


        );
    }
}

export default VideoListItem;