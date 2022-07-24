import React from 'react';
import './Hero.scss'

interface HeroProps {
  theme: boolean;
}

const Hero: React.FC<HeroProps> = ({theme}) => {
  return (
    <div className={theme? 'hero-container_light':'hero-container_black'}>
      <h2>
        Who i am
      </h2>
      <img src="./assets/images/me.jpg" alt="" />
    </div>
  )
}

export default Hero