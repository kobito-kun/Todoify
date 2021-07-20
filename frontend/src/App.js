import React from 'react';
import { BrowserRouter as Provider, Route, Switch} from 'react-router-dom';

import MainPage from './pages/MainPage.js';
import DashboardPage from './pages/DashboardPage.js';
import LoginPage from './pages/LoginPage.js';
import SectionPage from './pages/SectionPage.js';

function App() {
  return (
    <Provider>
      <Switch>
        <Route path="/" exact component={MainPage} />
        
        <Route path="/dashboard" exact component={DashboardPage} /> 
        <Route path="/dashboard/section/:id" exact component={SectionPage} />
        <Route path="/login" exact component={LoginPage} />
      </Switch>
    </Provider>
  );
}

export default App;
