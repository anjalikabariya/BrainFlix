import React, { Component } from 'react';
import './VideoCard.scss';

class VideoCard extends Component {
    handleVideoPlayer = e => {
        const {source} = this.props;
        const {title}=this.props;
        const {channel}=this.props;
        const {handleVideoPlayer} = this.props;
    }
    render(){
        return (
            <div>
                <div className="VideoCard__section" onClick={this.handleVideoPlayer}>
                    <div className="VideoCard__img"><video src={this.state.source} alt="recommended video" /></div>
                    <div className="VideoCard__description">
                        <h2>{this.state.title}</h2>
                        <p>{this.state.channel}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoCard;
