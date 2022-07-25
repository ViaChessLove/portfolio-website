import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { ScrollBar } from './global.style';
import HomePage from './pages/HomePage/HomePage';
import Portfolio from './pages/Portfolio/Portfolio';
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
          <Route path='/portfolio' element={<Portfolio/>}/>
        </Routes>
      </BrowserRouter>
      <Footer theme={theme}/>
    </div>
  );
}

export default App;
