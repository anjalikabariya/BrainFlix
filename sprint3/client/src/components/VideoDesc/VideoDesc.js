import React, {Component} from 'react';
import './VideoDesc.scss';
import viewsIcon from '../../Assets/Icons/PNG/Icon-views.png';
import likesIcon from '../../Assets/Icons/PNG/Icon-likes.png';

export default function VideoDesc({currVideo}) {
    let videoDate = (new Date(currVideo.timestamp)).toLocaleDateString();
    return (
        <div className="video__desc-container">
            <h1 className="video__desc-title">{currVideo.title}</h1>
            <div className="video__desc-info-container">
                <div className="video__desc-channel-container">
                    <p className="video__desc-channel">By {currVideo.channel}</p>
                    <h3 className="video__desc-timestamp"> {videoDate} </h3>
                </div>
                <div className="video__desc-reach-container">
                    <div className="video__desc-views-container">
                        <img src={viewsIcon} alt="views-icon" className="video__desc-reach-icon" />
                        <h3 className="video__desc-reach-num">{currVideo.views}</h3>
                    </div>
                    <div className="video__desc-likes-container">
                        <img src={likesIcon} alt="like-icon" className="video__desc-reach-icon" />
                        <h3 className="video__desc-reachNum">{currVideo.likes}</h3>
                    </div>
                </div>
            </div>
            <hr className="video__desc-hr video__desc-hr-hide" />
            <p className="video__desc-para">
                {currVideo.description}
            </p>
        </div>
    )
}

