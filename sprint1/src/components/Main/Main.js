import React from 'react';
import VideoCard from '../VideoCard';
import './Main.scss';
import NewComment from '../Comments/NewComment';
import Comments from '../Comments/Comments';
import * as uid from 'uniqid';
import vid0 from '../../Assets/Images/video-list-0.jpg';
import vid1 from '../../Assets/Images/video-list-1.jpg';
import vid2 from '../../Assets/Images/video-list-2.jpg';
import vid3 from '../../Assets/Images/video-list-3.jpg';
import vid4 from '../../Assets/Images/video-list-4.jpg';
import vid5 from '../../Assets/Images/video-list-5.jpg';
import vid6 from '../../Assets/Images/video-list-6.jpg';
import vid7 from '../../Assets/Images/video-list-7.jpg';
import vid8 from '../../Assets/Images/video-list-8.jpg';

const Videos = [{'id':uid(), 'source':vid0,'title':'BMX-Rampage: 2018 Highlights','channel':'Red Cow'}, {'id':uid(), 'source':vid1,'title':'Become A Travel Pro In 5 Easy Lesson...','channel':'Scotty Cranmer'}, {'id':uid(),'source':vid2,'title':'Les Houches The Hidden Gem Of The..','channel':'Scotty Cranmer'}, {'id':uid(), 'source':vid3,'title':'Travel Health Useful Medical Information','channel':'Scotty Cranmer'}, {'id':uid(),'source':vid4,'title':'Cheap Airline Tickets GReat Ways to Save','channel':'Emily Harper'}, {'id':uid(),'source':vid5,'title':'Take A Romantic Break In A Boutique Hotel','channel':'Ethan Owen'}, {'id':uid(),'source':vid6,'title':'Choose The Perfect Accomodations','channel':'Lydia Perez'}, {'id':uid(),'source':vid7,'title':'Cruising Destination Ideas','channel':'Timothy Austin'}, {'id':uid(),'source':vid8,'title':'Train Travle On Track For Safety','channel':'Scotty Cranmer'} ];
const commentArray = [{"name":"Micheal Lyons", "date":"12/08/2019", "comment":"They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greates opening of a concert I have EVER witnessed."}, {"name":"Gary Wong", "date":"12/08/2018", "comment":"Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! i Wish i can ride like him one day so i can really enjoy myself!"},{"name":"Theodore Duncan", "date":"11/05/2018", "comment":"How can someone be so good!! You can tell he lives for this and loves to do it every day. Evrytime I see him I feel instantly happy! He's deifnitely my favorite ever!"}];

function Main() {
        return (
            <div>
                <div className="comments__section">
                    <NewComment />
                    {commentArray.map(com => (
                            <Comments name={com.name} date={com.date} comment={com.comment} />
                        ))}
                </div>
                <div className="nextVideo">
                    <h3 className="nextVideo__title">NEXT VIDEO</h3>
                    {Videos.map(vid => (
                        <VideoCard key={vid.id} source={vid.source} title={vid.title} channel={vid.channel} width="120px" height="70px"/>
                    ))}
                </div>
            </div>
        )
};

export default Main;