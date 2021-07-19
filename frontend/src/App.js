import React from 'react';
import { BrowserRouter as Provider, Route, Switch} from 'react-router-dom';

import MainPage from './pages/MainPage.js';
import DashboardPage from './pages/DashboardPage.js';


function App() {
  return (
    <Provider>
      <Switch>
        <Route path="/" exact component={MainPage} />
        
        <Route path="/dashboard" exact component={DashboardPage} /> 
      </Switch>
    </Provider>
  );
}

export default App;
