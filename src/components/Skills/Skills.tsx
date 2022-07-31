import React, { useEffect } from 'react';
import './Skills.scss';
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import SkillsCard from './SkillsCard';
import SkillsList from './SkillsList';


interface SkillsProps {
  theme: boolean;
  lang: boolean;
}

const Skills: React.FC<SkillsProps> = ({theme, lang}) => {
  const initial = {opacity: 0, y: 40,};
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0 });
  useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: 0,
			});
		} else {
      animation.start(initial);
    }
	}, [inView, animation]);

  //locale

  return (
    <motion.section id='skills' initial={initial} transition={{ delay: 0  , duration: 0.2}} animate={animation}  ref={ref} className = {theme? 'skills-container_light': 'skills-container_black'}>
      <h2>
        {lang? 'Навыки': 'Skills'}
      </h2>
      <SkillsList lang={lang}/>
    </motion.section>
  )
}

export default Skills
