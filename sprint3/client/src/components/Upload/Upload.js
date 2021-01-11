import Button from '../Button';
import React from 'react';
import './Upload.scss';
import axios from 'axios';

const Thumbnail__img = require('../../Assets/Images/Upload-video-preview.jpg');

class Upload extends React.Component{
    state={
        title:"",
        channel:""
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value,
        });
    };

    handleSubmit = (e) => {
        const URL = 'http://localhost:8080/videos';
        e.preventDefault();
        const uploadData = {
            title: this.state.title,
            channel: this.state.channel,
            image: {Thumbnail__img},
        };

        axios({
            method: 'post',
            url: URL,
            data: uploadData,
            })
            .then(() => {
                this.setState({
                    title:"",
                    channel:"",
                })
            })
            .catch((error) => {
                return console.log(error);
            });
    };

    render(){
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <h1 className="upload__title">Upload Video</h1>
                    <div className="upload__container">
                        <div className="upload__image-container">
                            <h2><span className="upload__image-label">VIDEO THUMBNAIL</span></h2>
                            <img className="upload__image" src={Thumbnail__img} alt="upload video preview image" />
                        </div>
                        <div className="upload__video-form">
                            <label>
                                <span className="upload__video-title-label">TITLE YOUR VIDEO</span>
                                <div className="upload__video-title-container">
                                    <textarea type="text" name="title" placeholder="Add a title to your video" className="upload__video-title" value={this.state.title} onChange={this.handleChange} />
                                </div>
                            </label>
                            <br />
                            <label>
                                <span className="upload__video-desc-label">ADD A VIDEO DESCRIPTION</span>
                                <div className="upload__video-desc-container">
                                    <textarea className="upload__video-desc" type="text" name="description" placeholder="Add a description of your video" value={this.state.channel} onChange={this.handleChange}/>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="upload__button">
                        <div className="upload__button-cancel">CANCEL</div>
                        <div className="upload__button-publish" >
                            <Button name="PUBLISH" /> 
                        </div>   
                    </div>
                </form>
            </div>
        )
    }
    
}

export default Upload;

