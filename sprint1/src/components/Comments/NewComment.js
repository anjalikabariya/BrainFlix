import React from 'react';
import Button from '../Button';
import '../ProfileImage';
import ProfileImage from '../ProfileImage';

const ImagePath = require(`../../Assets/Images/Mohan-muruge.jpg`);
function NewComment() {
    return (
        <div>
            <div className="comment__section">
                <h3>JOIN THE CONVERSATION</h3>
                <div className="comment__section-newcomment">
                    <ProfileImage source={ImagePath}/>
                    <div>
                        <div className="form__section">
                            <textarea type="text" name="comment" id="comment" className="comment__input-text" placeholder="Add new comment"></textarea>
                        </div>
                        <Button name="COMMENT"/>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewComment;
