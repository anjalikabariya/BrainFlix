import React, {Component} from 'react';
import './Hero.scss';
import video from '../../Assets/Video/BrainStationSampleVideo.mp4';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

class Hero extends Component {
    state ={
        title : "BMX Rampage: 2018 Highlights",
        channel :"Red Cow",
        likes:'110,985',
        views: '1,002,103',
        date: '12/18/2018',
        description: "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title"
    }
    handleVideoPlayer = e => {
        this.setState({
            title: e.title,
            id: e.id,
            channel: e.channel,
            source: e.source
        })
    }
    render(){
    return (
        <div>
            <VideoPlayer id={this.state.id} 
                        source={video} 
                        title={this.state.title} 
                        channel={this.state.channel}
                        date = {this.state.date}
                        views = {this.state.views}
                        likes = {this.state.likes}
                        description = {this.state.description}
                        handleVideoPlayer = {this.handleVideoPlayer}
            />
        </div>
    )
}
}
export default Hero;
