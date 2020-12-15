import React, { Component } from 'react';
import './VideoCard.scss';

function VideoCard(props) {
        return (
            <div>
                <div className="videoCard__section">
                    <div className="videoCard__img">
                        <video id={props.id} src={props.source} alt="recommended video" poster="" controls width={props.width} height={props.height}/>
                    </div>
                    <div className="videoCard__title">
                        <div><h2>{props.title}</h2></div>
                        <div><p>{props.channel}</p></div>
                    </div>
                </div>
            </div>
        )
}

export default VideoCard;
