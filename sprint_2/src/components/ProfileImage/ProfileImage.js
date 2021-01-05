import { requirePropFactory } from '@material-ui/core';
import React from 'react';
import './ProfileImage.scss';
function ProfileImage(props) {
    return (
        <div>
            <img className="profileImage" src={props.source} alt="person-image" />
        </div>
    )
}

export default ProfileImage;
