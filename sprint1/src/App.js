import React, { Component } from 'react';
import './App.scss';
import * as uid from 'uniqid';
import Hero from './components/Hero';
import Header from './components/Header';
import Main from './components/Main';
import vid0 from './Assets/Images/video-list-0.jpg';
import vid1 from './Assets/Images/video-list-1.jpg';
import vid2 from './Assets/Images/video-list-2.jpg';
import vid3 from './Assets/Images/video-list-3.jpg';
import vid4 from './Assets/Images/video-list-4.jpg';
import vid5 from './Assets/Images/video-list-5.jpg';
import vid6 from './Assets/Images/video-list-6.jpg';
import vid7 from './Assets/Images/video-list-7.jpg';
import vid8 from './Assets/Images/video-list-8.jpg';

const Videos = [{'id':uid(), 'source':vid0,'title':'BMX-Rampage: 2018 Highlights','channel':'Red Cow'}, {'id':uid(), 'source':vid1,'title':'Become A Travel Pro In 5 Easy Lesson...','channel':'Scotty Cranmer'}, {'id':uid(),'source':vid2,'title':'Les Houches The Hidden Gem Of The..','channel':'Scotty Cranmer'}, {'id':uid(), 'source':vid3,'title':'Travel Health Useful Medical Information','channel':'Scotty Cranmer'}, {'id':uid(),'source':vid4,'title':'Cheap Airline Tickets GReat Ways to Save','channel':'Emily Harper'}, {'id':uid(),'source':vid5,'title':'Take A Romantic Break In A Boutique Hotel','channel':'Ethan Owen'}, {'id':uid(),'source':vid6,'title':'Choose The Perfect Accomodations','channel':'Lydia Perez'}, {'id':uid(),'source':vid7,'title':'Cruising Destination Ideas','channel':'Timothy Austin'}, {'id':uid(),'source':vid8,'title':'Train Travle On Track For Safety','channel':'Scotty Cranmer'} ];
class App extends Component {
  handleClick = e => {
    this.setState({
      videos: [{'id':e.id, 'title':e.title, 'channel':e.channel}]
    })
  }
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Main handleClick = {this.handleClick}/>
      </div>
    );
  }
}

export default App;
