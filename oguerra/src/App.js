
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


/*
import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Options from './pages/Options';
import Vote from './pages/Vote';
import Home from './pages/Home';

function App() {

  const [currPage, setCurrentPage] = useState('');

  
  useEffect(() => {
    if (!localStorage.hasOwnProperty('pathname')) {
      console.log(`resetting pathname`);
      localStorage.setItem('pathname', '/');
    }
    // console.log(window.location.pathname.split('/')[2]);
    // if (window.location.pathname.split('/')[2] === 'options') {
    //   setCurrentPage('Options');
    // } else if (window.location.pathname.split('/')[2] === 'vote') {
    //   setCurrentPage('Vote');
    // } else {
    //   setCurrentPage('Home')
    // }
    //console.log(localStorage.getItem('pathname').split('/')[1]);
    if (localStorage.getItem('pathname').split('/')[1] === 'options') {
      setCurrentPage('Options');
    } else if (localStorage.getItem('pathname').split('/')[1] === 'vote') {
      setCurrentPage('Vote');
    } else {
      setCurrentPage('Home')
    }


  }, []);


  const handlePageChange = (page) => {
    console.log(page);
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (currPage === 'Options') {
      return <Options handlePageChange={handlePageChange} />;
    } else if (currPage === 'Vote') {
      return <Vote handlePageChange={handlePageChange} />
    } else {
      return <Home handlePageChange={handlePageChange} />
    }
  };

  return (
      <div className="flex-column justify-flex-start min-100-vh">
        <Header handlePageChange={handlePageChange} />
        <div id="routeCon">
          {renderPage()}
        </div>
      </div>
  );
}

export default App;
*/