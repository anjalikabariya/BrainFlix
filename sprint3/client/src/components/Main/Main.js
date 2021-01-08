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
        mainVideo: {
            comments:[],
        },
        nextVideo: []
    }
    
    componentDidMount(){
        const API_URL = 'http://localhost:8080/videos';
        axios.all([
            axios.get(`${API_URL}`),
            axios.get(`${API_URL}/${this.state.onloadVideo}/`)
        ])
        .then((response) => {
            const mainVideo = response[0].data.mainVideo;
            console.log(response[0].data.videos);
            this.setState({
                nextVideo: response[0].data.sideVideo,
                mainVideo: mainVideo,
            })
        })
        .catch(error => console.log(error));
    }

    componentDidUpdate(){
        const API_URL = 'http://localhost:8080';
        const currId = this.props.match.params.id;
        if(currId && this.state.mainVideo.id !== currId){
            axios.get(`${API_URL}/videos/${currId}`)
            .then((response) => {
                console.log(response.data);
                this.setState({   
                    mainVideo: response.data,
                });
            })
            .catch(error => console.log(error));
        }
    }
 
    render() {
        
        return (
            <main className="main__container">
                <VideoPlayer video={this.state.mainVideo} />
                <section className="main__container-section">
                    <section className="main__container-section-left">
                        <VideoDesc currVideo={this.state.mainVideo} />
                        <section className="comments__section">
                            <NewComment commentArr={this.state.mainVideo.comments} />
                        </section>
                    </section>
                    <section className="main__container-section-right"> 
                        <section className="nextVideo">
                            <h3 className="nextVideo__title">NEXT VIDEO</h3>
                            <div className="nextVideo__container">
                                {this.state.nextVideo
                                    .filter((vid) => vid.id !== this.state.mainVideo.id)
                                    .map((vid) => {
                                        return <RecommendedVideos video = {vid} id={vid.id} videoId={vid.id} />
                                })}
                            </div>
                        </section>
                    </section>
                </section>
            </main>
        )
    }
}
