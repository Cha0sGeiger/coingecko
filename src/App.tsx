import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Dashboard } from './pages/dashboard';
import { StartPage } from './pages/start-page';
import { getCoinsList } from './services/api';
import { saveCoinListToSessionOrLocalStorage } from './utils/sessionStorage';

const App = () => {
  useEffect(() => {
    getCoinsList.then((response) =>
      saveCoinListToSessionOrLocalStorage(response)
    );
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route path="/coins-list" component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
