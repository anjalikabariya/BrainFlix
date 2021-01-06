import React from 'react';
import './VideoCard.scss';

function VideoCard({title, image, channel }) {
        return (
            <div>
                <div className="videoCard__section">
                    <div className="videoCard__img">
                        <img src={image} alt="thumbnail-image" />
                    </div>
                    <div className="videoCard__title">
                        <div><h2>{title}</h2></div>
                        <div><p>{channel}</p></div>
                    </div>
                </div>
            </div>
        )
}

export default VideoCard;
