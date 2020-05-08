import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { NotFound, History, Loading } from '../shared';
import LoginContainer from '../login/components/container/LoginContainer';

/**
 * @function AppRouter () use for routing the container components
 */
const AppRouter = () => {
  const ShowDetailsContainer = React.lazy(() => import('../showDetails/showDetailsIndex'))
  const ShowListContainer = React.lazy(() => import('../showList'))
  return (
    <Router history={History}>
      <React.Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path='/list' component={ShowListContainer} />
          <Route path='/shows/:show_id' component={ShowDetailsContainer} />
          <Route path='/search/:search_text' component={ShowListContainer} />
          <Route exact path='/' component={LoginContainer} />
          <Route component={NotFound} />
        </Switch>
      </React.Suspense>
    </Router>
  );
};

export default AppRouter
