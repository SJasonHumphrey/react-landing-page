import React from 'react';
import './Hero.css';

const Hero = ({imageSrc}) => {
    return(
        <div className='hero'>
            <img src={imageSrc} alt='Travel' className='hero_image'/>
            <h1 className='hero_title'>Travel <span className='text-color'>Your</span> Imagination.</h1>
        </div>
    )
};

export default Hero;