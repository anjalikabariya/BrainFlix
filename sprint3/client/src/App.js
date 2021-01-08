import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import Upload from './components/Upload';
import Header from './components/Header';
import Main from './components/Main';

class App extends React.Component{
  render(){
    return (
      <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/upload" component={Upload} />
          <Route path="/videos/:id" component={Main} />
        </Switch>
      </div>
      </Router>
    );
  }
}
export default App;
