import React from 'react';
import './VideoPlayer.scss';
import playIcon from '../../Assets/Icons/SVG/Icon-play.svg';
import scrubberIcon from '../../Assets/Icons/SVG/Icon-scrubber-control.svg';
import volumeIcon from '../../Assets/Icons/SVG/Icon-volume.svg';
import fullscreenIcon from '../../Assets/Icons/SVG/Icon-fullscreen.svg';


class VideoPlayer extends React.Component{
    render(){
        return (
            <div className="video__container">
            <video className="video" poster={this.props.video.image} />
            <div className="video__controls-container">
                <div className="video__controls-play">
                    <button>
                        <img className="video__controls-play-button-icon" src={playIcon} alt="play" />
                    </button>
                </div>
                <div>
                    <div className="video__controls-progress">
                        <div className="video__controls-progress-bar"></div>
                        <img src={scrubberIcon} className="video__controls-progress-scrubber" />
                    </div>
                    <div className="video__controls-progress-time-container">
                        <span className="video__controls-progress-time">0:00/</span>
                        <span className="video__controls-progress-time">{this.props.video.duration}</span>
                    </div>
                </div>
                <div className="video__controls-sub-container">
                    <button className="video__controls-sub-fullscreen">
                        <img className="video__controls-sub-fullscreen-icon" src={fullscreenIcon} />
                    </button>
                    <button className="video__controls-sub-volume">
                        <img src={volumeIcon} className="video__controls-sub-volume-icon" />
                    </button>
                </div>
            </div>
        </div>
    )

    }
}
export default VideoPlayer;
