import React from 'react';
import './VideoCard.scss';

function VideoCard({title, image, channel }) {
        return (
            <div className="videoCard">
                <div className="videoCard__section">
                    <div className="videoCard__section-container">
                        <img src={image} alt="videocard-image" className="videoCard-image" />
                        <div className="videoCard__desc-container">
                            <div><p className="videoCard__desc-title">{title}</p></div>
                            <div><p className="videoCard__desc-channel">{channel}</p></div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default VideoCard;
 