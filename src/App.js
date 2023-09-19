import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Home from './pages/home';

function App() {
  return (
   <Home/>
  );
}

export default App;
