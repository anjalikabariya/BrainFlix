import React from 'react';
import Button from '../Button';
import '../ProfileImage';
import ProfileImage from '../ProfileImage';
import './NewComment.scss';

const ImagePath = require(`../../Assets/Images/Mohan-muruge.jpg`);
function NewComment() {
    return (
        <div id="comment">
            <h2>3 Comments</h2>
            <div className="comment__section">
                <h3>JOIN THE CONVERSATION</h3>
                <div className="comment__section-newcomment">
                    <ProfileImage source={ImagePath}/>
                    <div className="comment__form">
                        <div className="form__section">
                            <textarea type="text" name="comment" className="comment__input-text" placeholder="Add new comment"></textarea>
                        </div>
                        <div>
                            <Button name="COMMENT"/>   
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default NewComment;
