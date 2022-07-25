import { AnimationControls } from 'framer-motion';
import React from 'react'
import SkillsCard from './SkillsCard';
import { enSkills, SkillsProps } from './skillsData';



const SkillsList = () => {
  const skills: SkillsProps[] = enSkills;
  return (
      <div className='skillslist-wrapper'>
        {skills.map((skill) => <SkillsCard key={skill.id} img={skill.img} title={skill.title} description={skill.description}/>)}
      </div>
  )
}

export default SkillsList