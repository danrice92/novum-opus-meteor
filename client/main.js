import { Meteor } from 'meteor/meteor';

import React from 'react';
import { render } from 'react-dom';

import './main.html';
import 'bootstrap/dist/css/bootstrap.min.css';
import { renderRoutes } from '../imports/startup/client/routes.js';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'));
});
