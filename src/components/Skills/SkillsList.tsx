import { AnimationControls } from 'framer-motion';
import React from 'react'
import SkillsCard from './SkillsCard';
import { enSkills, ruSkills, SkillsProps } from './skillsData';

interface SkillListProps {
  lang: boolean;
}


const SkillsList:React.FC<SkillListProps> = ({lang}) => {
  const skills: SkillsProps[] = lang? ruSkills: enSkills;
  return (
      <div className='skillslist-wrapper'>
        {skills.map((skill) => <SkillsCard key={skill.id} img={skill.img} title={skill.title} description={skill.description}/>)}
      </div>
  )
}

export default SkillsList