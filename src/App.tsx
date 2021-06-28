import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import Chat from './screens/Chat';
import Dashboard from './screens/Dashboard';

const DASHBOARD_ROUTE = '/dashboard';
const CHAT_ROUTE = '/chat/:userID';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path={DASHBOARD_ROUTE} component={Dashboard} />
          <Route path={CHAT_ROUTE} component={Chat} />
          <Redirect to={DASHBOARD_ROUTE} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
