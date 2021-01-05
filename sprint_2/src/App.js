import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import axios from 'axios';
import Upload from './components/Upload';
import Header from './components/Header';
import Main from './components/Main';

export const API_URL = 'https://project-2-api.herokuapp.com.';
const API_KEY = axios.get(`${API_URL}/register`)
.then(function(res) {console.log(res)});


function App() {
  return (
    <div className="app">
      <Router>
      <Header />
      <hr className="divider"/>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/upload" component={Upload} />
        <Route path="/:videoId" component={Main} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
