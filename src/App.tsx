import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import Header from './components/Header/Header';
import { ScrollBar } from './global.style';
import { RootState } from './store/store';

const App = () => {
  const theme = useSelector((state: RootState) => state.theme.state);
  return (
    <div className={theme? 'light': 'dark'}>
      <ScrollBar/>
      <Header/>
      
    </div>
  );
}

export default App;
