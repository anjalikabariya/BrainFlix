import React, { Component } from 'react';
import './App.scss';
import Hero from './components/Hero';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
    return (
      <div className="app">
        <Header />
        <Hero />
        <Main />
      </div>
    );
}

export default App;
