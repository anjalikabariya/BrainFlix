import React, {Component} from 'react';
import viewsIcon from '../../Assets/Icons/PNG/Icon-views.png';
import likesIcon from '../../Assets/Icons/PNG/Icon-likes.png';
import VideoCard from '../VideoCard';




function VideoPlayer(id, source, channel, title, views, likes, date, description, handleVideoPlayer){
   
        return (
        <div>
            <VideoCard id={id} source={source} title={title} channel={channel} handleVideoPlayer={() => handleVideoPlayer(id, channel, source, title)} />
            <h3> {date} </h3>
            <div className="views">
                <img src={viewsIcon} />
                <h3>{views}</h3>
            </div>
            <div className="likes">
                <img src={likesIcon} />
                <h3>{likes}</h3>
            </div>
            <p className="hero__desc">
                {description}
            </p>
            
        </div>
        )
}
export default VideoPlayer;
