import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  import '../imports/api/jobposts.js';
});
