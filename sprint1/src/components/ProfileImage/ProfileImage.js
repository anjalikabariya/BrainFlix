import { requirePropFactory } from '@material-ui/core';
import React from 'react';

function ProfileImage(props) {
    return (
        <div>
            <img src={props.source} alt="person-image" className="comment__image-icon" />
        </div>
    )
}

export default ProfileImage;
