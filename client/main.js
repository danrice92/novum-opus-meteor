import { Meteor } from 'meteor/meteor';

import React from 'react';
import { render } from 'react-dom';

import { renderRoutes } from '../imports/startup/client/routes.js';
import './main.html';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'));
});

// import { Meteor } from 'meteor/meteor';
// import { render } from 'react-dom';
// import { renderRoutes } from '../imports/startup/client/routes.js';
//
// Meteor.startup(() => {
//   render(renderRoutes(), document.getElementById('app'));
// });
