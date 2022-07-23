import React, { useState } from 'react';
import './Header.scss';
import {RiLightbulbLine} from 'react-icons/ri'
import { ThemeSwitcher } from './Header.style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { InitialStateProps, switchTheme } from '../../slices/themeSlice';

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.state);
  const handleSwitchTheme = () => {
    dispatch(switchTheme(!theme))
  }
  return (
    <div className={theme? 'header-wrapper_dark':'header-wrapper'}>
      <nav className='header-container'>
        <h2>
          Vyacheslav nemtsev - frontend developer
        </h2>
        <ThemeSwitcher onClick={handleSwitchTheme}/>
      </nav>
    </div>
  )
}

export default Header