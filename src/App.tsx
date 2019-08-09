import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import TitleComponent from './components/title.component';
import MainComponent from './components/main.component';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <TitleComponent />
      <MainComponent />
    </BrowserRouter>
  );
}

export default App;
