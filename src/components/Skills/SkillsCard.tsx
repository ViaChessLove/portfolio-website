import React from 'react';

interface SkillsCardProps {
  img: string;
  title: string;
  description: string;
}

const SkillsCard: React.FC<SkillsCardProps> = ({img, title, description}) => {
  return (
    <div>
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default SkillsCard
