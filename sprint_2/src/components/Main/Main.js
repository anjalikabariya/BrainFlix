import React, {Component} from 'react';
import './Main.scss';
import axios from 'axios';
import NewComment from '../Comments/NewComment';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VideoDesc from '../VideoDesc/VideoDesc';
import RecommendedVideos from '../RecommendedVideos';

export default class Main extends Component {
    state = {
        onloadVideo: '1af0jruup5gu',
        currVideo: '1af0jruup5gu',
        mainVideo: {},
        nextVideo: []
    }
    
    componentDidMount(){
        const API_URL = 'https://project-2-api.herokuapp.com.';
        const API_KEY = axios.get(`${API_URL}/register`);
        axios.all([
            axios.get(`${API_URL}${API_KEY}`),
            axios.get(`${API_URL}/${this.state.onloadVideo}${API_KEY}`)
        ])
        .then(response => {
            this.setState({
                nextVideo: response[0].data,
                mainVideo: response[1].data
            })
        })
        .catch(error => console.log(error));
    }

    componentDidUpdate(){
    const currId = this.props.match.params.id;
    if(currId && this.state.currVideo !== currId){
        axios.all([
            axios.get(`${this.API_URL}${this.API_KEY}`),
            axios.get(`${this.API_URL}/${this.state.onloadVideo}${this.API_KEY}`)
        ])
        .then(response => {
            this.setState({
                nextVideo: response[0].data,
                mainVideo: response[1].data,
                currVideo: currId
            })
        })
        .catch(error => console.log(error));
    }
}
 
    render() {
        
        return (
            <div className="main__container">
                <VideoPlayer poster={this.state.mainVideo.image} time={this.state.mainVideo.duration} />
                <div className="main__container-section">
                    <div>
                        <VideoDesc currVideo={this.state.mainVideo} />
                        <div className="comments__section">
                            <NewComment commentArr={this.state.mainVideo.comments} />
                        </div>
                        <div className="nextVideo">
                            <h3 className="nextVideo__title">NEXT VIDEO</h3>
                            <RecommendedVideos nextVideo={this.state.nextVideo} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
