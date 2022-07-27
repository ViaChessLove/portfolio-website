import React from 'react';
import './Hero.scss';
import {motion, useAnimation} from 'framer-motion'
import { Link } from 'react-scroll';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { enHero, ruHero } from './heroData';
import { RouterLink } from './Hero.style';


interface HeroProps {
  theme: boolean;
  lang: boolean;
}

const Hero: React.FC<HeroProps> = ({theme, lang}) => {
  //image 
  const initialImage = {opacity: 0, x: -40,};
  const animationImage = useAnimation();
  animationImage.start({ opacity: 1, x: 0});

  //block
  const initialBlock = {opacity: 0, x: 50,};
  const animationBlock = useAnimation();
  animationBlock.start({ opacity: 1, x: 0});

  //locale

  const heroContent: {
    about: string,
    whoami: string,
    job: string,
    links: any
  } = lang? ruHero: enHero;
  return (
    <div className={theme? 'hero-container_light':'hero-container_black'}>
      <motion.img initial={initialImage} transition={{ delay: 0.2, duration: 0.2}} animate={animationImage}
       className={theme? 'hero-photo_light': 'hero-photo_black'} src="./assets/images/me.jpg" alt="" />
      <motion.div initial={initialBlock} transition={{delay: 1, duration: 0.4}} animate={animationBlock} className='hero-text'>
        <h2 className='hero-text_title'>{heroContent.about}</h2>
        <p>{heroContent.whoami}</p>
        <p>{heroContent.job}</p>
        <ul>
          {heroContent.links && heroContent.links.map((link: any) => {
            return link.to === 'portfolio'? 
            <RouterLink to={link.to}><li>{link.title}</li></RouterLink> :
            <Link spy={true} smooth={true} duration={800} to={link.to}><li>{link.title}</li></Link>
            })}
        </ul>
      </motion.div>
    </div>
  )
}

export default Hero