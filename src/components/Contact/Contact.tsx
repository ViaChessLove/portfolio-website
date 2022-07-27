import React from 'react'

interface ContactProps {
  theme: boolean
  lang: boolean;
}

const Contact: React.FC<ContactProps> = ({theme, lang}) => {
  return (
    <div>
      Contact
    </div>
  )
}

export default Contact