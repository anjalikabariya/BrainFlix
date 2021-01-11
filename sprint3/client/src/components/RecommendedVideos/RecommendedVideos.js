import React, { Component } from 'react';
import { Link } from "react-router-dom";
import VideoCard from '../VideoCard';

export class RecommendedVideos extends Component {
    render() {
        return (
            <Link to={`/videos/${this.props.videoId}`}>
                <VideoCard key={this.props.videoId} image={this.props.video.image} title={this.props.video.title} channel={this.props.video.channel} />
            </Link>
        )
    }
}

export default RecommendedVideos



