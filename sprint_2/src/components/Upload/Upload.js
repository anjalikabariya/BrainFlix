import Button from '../Button';
import React from 'react';
import './Upload.scss';
const Thumbnail__img = require('../../Assets/Images/Upload-video-preview.jpg');


function Upload() {
    return (
        <div>
            <h1 className="upload__title">Upload Video</h1>
            <div className="upload__container">
                <div className="upload__image-container">
                    <h2><span className="upload__image-label">VIDEO THUMBNAIL</span></h2>
                    <img className="upload__image" src={Thumbnail__img} alt="upload video preview image" />
                </div>
                <div className="upload__video-form">
                    <form >
                        <label>
                            <span className="upload__video-title-label">TITLE YOUR VIDEO</span>
                            <div className="upload__video-title-container">
                                <input type="text" name="name" placeholder="Add a title to your video" className="upload__video-title" />
                            </div>
                        </label>
                        <br />
                        <label>
                            <span className="upload__video-desc-label">ADD A VIDEO DESCRIPTION</span>
                            <div className="upload__video-desc-container">
                                <input className="upload__video-desc" type="text" name="description" placeholder="Add a description of your video" />
                            </div>
                        </label>
                    </form>
                </div>
            </div>
            <div className="upload__button">
                <div className="upload__button-cancel">CANCEL</div>
                <div className="upload__button-publish" >
                    <Button name="PUBLISH" /> 
                </div>   
            </div>
        </div>
    )
}

export default Upload;

