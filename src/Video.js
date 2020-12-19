import React ,{useRef,useState}from 'react';
import './Video.css';
import VideoFoot from './VideoFoot';

import VideoSidebar from './VideoSidebar';


function Video({ url, channel, description, song, likes, messages, shares }) {
     const [playing, setPlay] = useState(false);
    const videoRef =  useRef(null);
    const onVideoPress = ()=>{
        if(playing){
            videoRef.current.pause();
            setPlay(false);
        }
        else{
            videoRef.current.play();
            setPlay(true);
        }
       
    };
        return (
        <div className="video">
        
            <video loop onClick={onVideoPress} ref ={videoRef}  className="video_player" src={url}></video>
      <VideoFoot channel={channel} description={description} song={song}/>
      <VideoSidebar likes={likes} shares={shares} messages={messages}/>
        </div>
    );
}

export default Video;
