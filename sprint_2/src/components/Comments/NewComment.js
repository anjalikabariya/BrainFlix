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
                    <h3>JOIN THE CONVERSATION</h3>
                    <div className="comment__section-newcomment">
                        <ProfileImage source={ImagePath}/>
                        <div className="comment__form">
                            <div className="form__section">
                                <textarea type="text" name="comment" className="comment__input-text" rows="3" placeholder="Add new comment"></textarea>
                            </div>
                            <div>
                                <Button name="COMMENT"/>   
                            </div>
                        </div>
                    </div>
                </div>
                {commentArr.map((com) => (
                    <Comments name={com.name} date={com.date} comment={com.comment} />
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
