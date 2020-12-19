import React from 'react';
import './VideoSidebar.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { useState } from 'react';


function VideoSidebar({likes,shares,messages}) {
    const [liked, setLiked] = useState(false);
    return (
        <div className="videoSidebar">

            <div className="videoSidebar_button">
                {liked ? (<FavoriteIcon  fontSize="large" onClick={e=>setLiked(false)} />) : (<FavoriteBorderIcon  onClick={e=>setLiked(true)}/>)}

                <p>{likes ? likes+1:likes-1}</p>
            </div>
            <div className="videoSidebar_button">
                <MessageIcon   fontSize="large"/>
                <p>{messages}</p>
            </div>
            <div className="videoSidebar_button">
                <ShareIcon   fontSize="large"/>
                <p>{shares}</p>
            </div>

        </div>
    );
}

export default VideoSidebar;
