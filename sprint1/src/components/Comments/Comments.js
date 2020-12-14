import React from 'react';
import ProfileImage from '../ProfileImage';


function Comments(props) {
    return (
        <div> 
            <div className="comment__container">
                <ProfileImage />
                <div className="comment">
                    <div className="comment__header">    
                        <h3 className="comment__header-writer">{props.name}</h3>
                        <p className="comment__header-timestamp">{props.date}</p>
                    </div>
                    <p className="comment__text">{props.comment}</p>
                </div> 
            </div>
        </div>
    )
}

export default Comments;
