import React from 'react'
import { useSelector } from 'react-redux';
import Hero from '../../components/Hero/Hero';
import { RootState } from '../../store/store';
import './HomePage.scss'

const HomePage = () => {
  const theme = useSelector((state: RootState) => state.theme.state);
  return (
    <main className='homepage-wrapper'>
      <Hero theme={theme}/>
    </main>
  )
}

export default HomePage
