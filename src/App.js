import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Components/Homepage';
import FormPage from './Components/FormPage';
import ResultPage from './Components/ResultPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/form" exact component={FormPage} /> {/* Route for the FormPage */}
        <Route path="/result" component={ResultPage} /> 
      </Switch>
    </Router>
  );
}

export default App;
