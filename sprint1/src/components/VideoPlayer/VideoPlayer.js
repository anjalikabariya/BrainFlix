import React from 'react';
import viewsIcon from '../../Assets/Icons/PNG/Icon-views.png';
import likesIcon from '../../Assets/Icons/PNG/Icon-likes.png';
import VideoCard from '../VideoCard';
import './VideoPlayer.scss';



function VideoPlayer(props){
   
        return (
        <div>
            <div className="vidCard__section">
                    <div className="vidCard__img">
                        <video id={props.id} src={props.source} alt="recommended video" poster="" controls width={props.width} height={props.height}/>
                    </div>
                    <div><h2 id="vidCard__title">{props.title}</h2></div>
            </div>
            <div className="video__card">
                <div className="video__desc-container">
                    <div className="videoCard__desc">
                        <p className="video__channel">By {props.channel}</p>
                        <h3 className="video__timestamp"> {props.date} </h3>
                    </div>
                    <div className="video">
                        <div className="video__Reach">
                            <div className="video__views">
                                <img src={viewsIcon} />
                                <h3 className="video__reachNum">{props.views}</h3>
                            </div>
                            <div className="video__likes">
                                <img src={likesIcon} />
                                <h3 className="video__reachNum">{props.likes}</h3>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <hr />
            </div>
            <p className="video__desc">
                {props.description}
            </p>
            
        </div>
        )
}
export default VideoPlayer;
