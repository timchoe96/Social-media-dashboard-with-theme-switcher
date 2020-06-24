import React from 'react';
import Ocard from './Ocard';
import facebook from './images/icon-facebook.svg';
import instagram from './images/icon-instagram.svg';
import twitter from './images/icon-twitter.svg';
import youtube from './images/icon-youtube.svg';
import up from './images/icon-up.svg';  
import down from './images/icon-down.svg';

const Overview = ({oview,small,large,background,state}) => {
    return(
        <div className='overview'>
<h1  className='title' style={{color:oview}}>
    Overview - Today
</h1>
<div className='overviewGrid'>
<Ocard icon={facebook} direction={up} subject={'Page Views'} number={'87'} percent={'3%'} percentColor={'hsl(163, 72%, 41%)'} smallText={small} largeText={large} bg={background}  lightOrDark = {state}/>
<Ocard icon={facebook} direction={down} subject={'Likes'} number={'52'} percent={'2%'} percentColor={'hsl(356, 69%, 56%)'} smallText={small} largeText={large} bg={background}  lightOrDark = {state}/>
<Ocard icon={instagram} direction={up} subject={'Likes'} number={'5462'} percent={'2257%'} percentColor={'hsl(163, 72%, 41%)'} smallText={small} largeText={large} bg={background} lightOrDark = {state} />
<Ocard icon={instagram} direction={up} subject={'Profile Views'} number={'52k'} percent={'1375%'} percentColor={'hsl(163, 72%, 41%)'} smallText={small} largeText={large} bg={background} lightOrDark = {state}/>
<Ocard icon={twitter} direction={up} subject={'Retweets'} number={'117'} percent={'303%'} percentColor={'hsl(163, 72%, 41%)'} smallText={small} largeText={large} bg={background} lightOrDark = {state}/>
<Ocard icon={twitter} direction={up} subject={'Likes'} number={'507'} percent={'553%'} percentColor={'hsl(163, 72%, 41%)'} smallText={small} largeText={large} bg={background} lightOrDark = {state}/>
<Ocard icon={youtube} direction={down} subject={'Likes'} number={'107'} percent={'19%'} percentColor={'hsl(356, 69%, 56%)'} smallText={small} largeText={large} bg={background} lightOrDark = {state}/>
<Ocard icon={youtube} direction={down} subject={'Total Views'} number={'1407'} percent={'12%'} percentColor={'hsl(356, 69%, 56%)'} smallText={small} largeText={large} bg={background} lightOrDark = {state}/>
</div>
        </div>
    )
}

export default Overview;