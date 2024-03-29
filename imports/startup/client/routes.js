import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Home from '../../ui/pages/Home.js';
import NewJobPost from '../../ui/pages/NewJobPost.js';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/jobposts/new" component={NewJobPost}/>
    </Switch>
  </Router>
);

// route component examples
// import AppContainer from '../../ui/containers/AppContainer.js';
// import ListPageContainer from '../../ui/containers/ListPageContainer.js';
// import AuthPageSignIn from '../../ui/pages/AuthPageSignIn.js';
// import AuthPageJoin from '../../ui/pages/AuthPageJoin.js';
// import NotFoundPage from '../../ui/pages/NotFoundPage.js';
//
// export const renderRoutes = () => (
//   <Router history={browserHistory}>
//     <Switch>
//       <Route exact path="/" component={AppContainer}/>
//       <Route exact path="/lists/:id" component={ListPageContainer}/>
//       <Route exact path="/signin" component={AuthPageSignIn}/>
//       <Route exact path="/join" component={AuthPageJoin}/>
//       <Route component={NotFoundPage}/>
//     </Switch>
//   </Router>
// );
