import React, { useState } from 'react';
import './Header.scss';
import { LanguageSwitcher, ThemeSwitcher } from './Header.style';
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
    <div className={theme? 'header-wrapper_dark':'header-wrapper_light'}>
      <nav className='header-container'>
        <h2>
          Vyacheslav Nemtsev
        </h2>
        <div>
          <ThemeSwitcher onClick={handleSwitchTheme}/>
          <LanguageSwitcher/>
        </div>
      </nav>
    </div>
  )
}

export default Header