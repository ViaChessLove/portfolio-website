import React from 'react';
import './Hero.scss'

interface HeroProps {
  theme: boolean;
}

const Hero: React.FC<HeroProps> = ({theme}) => {
  return (
    <div className={theme? 'hero-container_light':'hero-container_black'}>
      <img className={theme? 'hero-photo_light': 'hero-photo_black'} src="./assets/images/me.jpg" alt="" />
      <div className='hero-text'>
        <h2 className='hero-text_title'>Who am i</h2>
        <p>I'm frontend developer from Russia</p>
        <p>Currently i'm looking for a job</p>
        <ul>
          <li>Skills</li>
          <li>Portfolio</li>
          <li>Contact</li>
          <li>Socials</li>
        </ul>
      </div>
    </div>
  )
}

export default Hero