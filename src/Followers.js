import React from 'react';
import Fcard from './Fcard';
import facebook from './images/icon-facebook.svg';
import instagram from './images/icon-instagram.svg';
import twitter from './images/icon-twitter.svg';
import youtube from './images/icon-youtube.svg';
import up from './images/icon-up.svg';
import down from './images/icon-down.svg';

const Followers = ({background,large,small,state}) => {
    return(
        <div className='followerGrid'>
        
        <Fcard topBorder={'hsl(208, 92%, 53%)'} smallLogo={facebook} handle={'@nathanf'} followers={'1987'} type={'F O L L O W E R S'} count={up} number={'12'} numberColor={'hsl(163, 72%, 41%)'} bg={background} largeText={large} smallText={small} lightOrDark={state} />
        
        <Fcard topBorder={'hsl(203, 89%, 53%)'} smallLogo={twitter} handle={'@nathanf'} followers={'1044'} type={'F O L L O W E R S'} count={up} number={'99'} numberColor={'hsl(163, 72%, 41%)'} bg={background} largeText={large} smallText={small}  lightOrDark={state}/>
        
        <Fcard topBorder={'linear-gradient(-90deg,hsl(37, 97%, 70%), hsl(329, 70%, 58%))'} smallLogo={instagram} handle={'@realnathanf'} followers={'11k'} type={'F O L L O W E R S'} count={up} number={'1099'} numberColor={'hsl(163, 72%, 41%)'} bg={background} largeText={large} smallText={small}  lightOrDark={state}/>
        
        <Fcard topBorder={'hsl(348, 97%, 39%)'} smallLogo={youtube} handle={'Nathan F.'} followers={'8239'} type={'S U B S C R I B E R S'} count={down} number={'144'} numberColor={'hsl(356, 69%, 56%)'} bg={background} largeText={large} smallText={small} lightOrDark={state} />
        </div>  
    )
}

export default Followers;