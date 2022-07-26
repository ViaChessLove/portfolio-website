import React, { useState } from 'react';
import './Header.scss';
import { LanguageSwitcher, ThemeSwitcher } from './Header.style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { InitialStateProps, switchTheme } from '../../slices/themeSlice';
import { switchLanguage } from '../../slices/languageSlice';
import { enHeader, ruHeader } from './headerLanguage';

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.state);
  const lang = useSelector((state: RootState) => state.language.state);
  const handleSwitchTheme = () => {
    dispatch(switchTheme(!theme))
  }
  const handleSwitchLanguage = () => {
    dispatch(switchLanguage(!lang))
  }

  return (
    <div className={theme? 'header-wrapper_dark':'header-wrapper_light'}>
      <nav className='header-container'>
        <h2>
          {lang? ruHeader: enHeader}
        </h2>
        <div>
          <ThemeSwitcher onClick={handleSwitchTheme}/>
          <LanguageSwitcher onClick={handleSwitchLanguage}/>
        </div>
      </nav>
    </div>
  )
}

export default Header