import React from 'react';
import Header from './components/Header/Header';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import StackOverflow from './components/StackOverflow';
import Question from './components/Add-Question/Question';
import ViewQuestion from './components/ViewQuestion';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />  
        <Switch>
          <Route exact path="/" component={StackOverflow} />
          <Route exact path="/add-question" component={Question} />
          <Route exact path="/question" component={ViewQuestion} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
