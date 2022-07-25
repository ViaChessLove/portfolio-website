import React from 'react';
import './Hero.scss';
import {motion, useAnimation} from 'framer-motion'
import { Link } from 'react-scroll';


interface HeroProps {
  theme: boolean;
}

const Hero: React.FC<HeroProps> = ({theme}) => {
  //image 
  const initialImage = {opacity: 0, x: -40,};
  const animationImage = useAnimation();
  animationImage.start({ opacity: 1, x: 0});

  //block
  const initialBlock = {opacity: 0, x: 50,};
  const animationBlock = useAnimation();
  animationBlock.start({ opacity: 1, x: 0});
  return (
    <div className={theme? 'hero-container_light':'hero-container_black'}>
      <motion.img initial={initialImage} transition={{ delay: 0.2, duration: 0.2}} animate={animationImage}
       className={theme? 'hero-photo_light': 'hero-photo_black'} src="./assets/images/me.jpg" alt="" />
      <motion.div initial={initialBlock} transition={{delay: 1, duration: 0.4}} animate={animationBlock} className='hero-text'>
        <h2 className='hero-text_title'>Who am i</h2>
        <p>I'm frontend developer from Russia</p>
        <p>Currently i'm looking for a job</p>
        <ul>
          <Link spy={true} smooth={true} duration={800} to='skills'><li>Skills</li></Link>
          <li>Portfolio</li>
          <li>Contact</li>
          <li>Socials</li>
          <li>Education</li>
          <li>Experience</li>
        </ul>
      </motion.div>
    </div>
  )
}

export default Hero