import React from 'react';
import './Footer.scss'

interface FooterProps {
  theme: boolean;
}

const Footer: React.FC<FooterProps> = ({theme}) => {
  return (
    <div className={theme? 'footer-wrapper_dark': 'footer-wrapper_light'}>
      Footer
    </div>
  )
}

export default Footer