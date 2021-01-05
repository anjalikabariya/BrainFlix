import React from 'react';
import VideoCard from '../VideoCard';

function RecommendedVideos({nextVideo}) {
    return (
        <div>
            {nextVideo.map(vid => (
                <VideoCard key={vid.id} source={vid.source} title={vid.title} channel={vid.channel} width="120px" height="70px"/>
            ))}
        </div>
    )
}

export default RecommendedVideos;
