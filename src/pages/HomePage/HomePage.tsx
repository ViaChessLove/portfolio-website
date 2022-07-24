import React from 'react'
import { useSelector } from 'react-redux';
import Hero from '../../components/Hero/Hero';
import Skills from '../../components/Skills/Skills';
import { RootState } from '../../store/store';
import './HomePage.scss'

const HomePage = () => {
  const theme = useSelector((state: RootState) => state.theme.state);
  return (
    <main className='homepage-wrapper'>
      <Hero theme={theme}/>
      <Skills theme={theme}/>
    </main>
  )
}

export default HomePage
