import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import Hero from './components/Hero';
import Header from './components/Header';
import Main from './components/Main';
export const API_URL = 'https://project-2-api.herokuapp.com.';

const API_KEY = axios.get(`${API_URL}/register`)
.then(function(res) {console.log(res)});
function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Route path="/" component={Hero} />
      </Router>
      <Main />
    </div>
  );
}

export default App;
