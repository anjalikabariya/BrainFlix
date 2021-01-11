import React from 'react';
import './VideoPlayer.scss';
import playIcon from '../../Assets/Icons/SVG/Icon-play.svg';
import scrubberIcon from '../../Assets/Icons/SVG/Icon-scrubber-control.svg';
import volumeIcon from '../../Assets/Icons/SVG/Icon-volume.svg';
import fullscreenIcon from '../../Assets/Icons/SVG/Icon-fullscreen.svg';


class VideoPlayer extends React.Component{
    render(){
        return (
            <div>
                <div className="video__container">
                    <video className="video__container-video" poster={this.props.video.image} />
                    <div className="video__container-play-control">
                        <button className="video__container-play-button">
                            <img className="video__container-play-image" src={playIcon} alt="play" />
                        </button>
                    </div>
                    <div className="video__container-progress-control">
                        <button className="video__container-progress-button">
                            <div className="video__container-progress-bar"></div>
                            <div className="video__container-time-control">
                                <span className="video__container-time-start">0:00/</span>
                                <span className="video__container-time-total">{this.props.video.duration}</span>
                            </div>
                        </button>
                    </div>
                    <div className="video__container-fullscreen-control">
                        <button className="video__container-fullscreen-button">
                            <img className="video__container-fullscreen-icon" src={fullscreenIcon} />
                        </button>
                        <button className="video__container-volume-button">
                            <img src={volumeIcon} className="video__container-volume-icon" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default VideoPlayer;
