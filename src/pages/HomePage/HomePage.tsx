import React from 'react'
import { useSelector } from 'react-redux';
import Contact from '../../components/Contact/Contact';
import Hero from '../../components/Hero/Hero';
import Skills from '../../components/Skills/Skills';
import { RootState } from '../../store/store';
import './HomePage.scss'

const HomePage = () => {
  const theme = useSelector((state: RootState) => state.theme.state);
  const lang = useSelector((state: RootState) => state.language.state);
  return (
    <main className='homepage-wrapper'>
      <Hero theme={theme} lang={lang}/>
      <Skills theme={theme} lang={lang}/>
      <Contact  theme={theme} lang={lang}/>
      {/*
        <Contact  theme={theme}/>
        <Socials theme={theme}/>
        <Education theme={theme}/>
        <Experience theme={theme}/>
      */}
    </main>
  )
}

export default HomePage
