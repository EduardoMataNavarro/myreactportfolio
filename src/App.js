import React from 'react';
import portfolio from './components/portfolio';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {


  return (
    <div className="App min-vh-100">
      <div className="container-fluid">
        <Router>
          <Switch>
            <Route exact path="/" component={portfolio} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
