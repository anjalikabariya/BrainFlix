import React from 'react';
import Button from '../Button';
import '../ProfileImage';
import ProfileImage from '../ProfileImage';
import './NewComment.scss';
import Comments from '../Comments';

const ImagePath = require(`../../Assets/Images/Mohan-muruge.jpg`);
function NewComment({commentArr}) {
    if(commentArr){
        let commentArrLength = commentArr.length;
        return (
            <div id="comment">
                <h2>{commentArrLength} Comments</h2>
                <div className="comment__section">
                    <h3 className="comment__section-newcomment-title">JOIN THE CONVERSATION</h3>
                    <div className="comment__section-newcomment-form-container">
                        <form className="comment__section-newcomment-form" action="" name="new-comment-form">
                            <div className="comment__section-newcomment-image"><ProfileImage source={ImagePath}/></div>
                            <div className="comment__section-newcomment-container">
                                <textarea type="text" name="comment" className="comment__section-newcomment-text" rows="3" placeholder="Add new comment"></textarea>
                                <div className="comment-section-newcomment-button-container"><Button name="COMMENT" /></div>                            
                            </div>
                        </form>
                    </div>
                </div>
                {commentArr.map((com) => (
                    <Comments key={com.id} name={com.name} date={com.date} comment={com.comment} />
                ))}
            </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}

export default NewComment;
