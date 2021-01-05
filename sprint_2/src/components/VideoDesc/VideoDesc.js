import React, {Component} from 'react';
import './VideoDesc.scss';
import viewsIcon from '../../Assets/Icons/PNG/Icon-views.png';
import likesIcon from '../../Assets/Icons/PNG/Icon-likes.png';

export default function VideoDesc({currVideo}) {
    let videoDate = (new Date(currVideo.timestamp)).toLocaleDateString();
    return (
        <div>
            <div className="video__desc-card">
                <div>
                    <h1 id="video__desc-title">{currVideo.title}</h1>
                </div>
                <div className="video__desc-container">
                    <div className="video__desc-info">
                        <p className="video__desc-channel">By {currVideo.channel}</p>
                        <h3 className="video__desc-timestamp"> {videoDate} </h3>
                    </div>
                    <div className="video__desc">
                        <div className="video__desc-Reach">
                            <div className="video__desc-views">
                                <img src={viewsIcon} />
                                <h3 className="video__desc-reachNum">{currVideo.views}</h3>
                            </div>
                            <div className="video__desc-likes">
                                <img src={likesIcon} />
                                <h3 className="video__desc-reachNum">{currVideo.likes}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="video__desc-para">
                {currVideo.description}
            </p>
        </div>
    )
}

