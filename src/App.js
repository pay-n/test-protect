import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Wrapper />
        </Route>
        <Route exact path="/search">
              <Search />
        </Route>
     </Switch>
    </Router>
  );
}

export default App;
