import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import { ScrollBar } from './global.style';
import HomePage from './pages/HomePage/HomePage';
import { RootState } from './store/store';

const App = () => {
  const theme = useSelector((state: RootState) => state.theme.state);
  return (
    <div className={theme? 'light': 'dark'}>
      <ScrollBar/>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
