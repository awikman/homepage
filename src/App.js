import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from  './Header.js';
import MainContent from './MainContent.js';
import Footer from './Footer.js';
import Sidebar from './Sidebar.js';

function App() {
  return (
      <div className="App">
        <Header/>
        <div className="MainContainer">
          <MainContent/>
          <Sidebar/>
        </div>
        <Footer/>
      </div>
  );
}

export default App;
