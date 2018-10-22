import { Meteor } from 'meteor/meteor';
import { expect } from 'chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';

import HomePage from './pages/Home.test.js';
import NewJobPostPage from './pages/NewJobPost.test.js';

describe('novum-opus', function() {
  beforeEach(function() {
    resetDatabase();
  })
  it("has the correct package.json name", async function() {
    const { name } = await import("../package.json");
    expect(name).to.equal("novum-opus");
  });

  if (Meteor.isClient) {
    it("is not the server", function() {
      expect(Meteor.isServer).to.equal(false);
    });
  }

  if (Meteor.isServer) {
    it("is not the client", function() {
      expect(Meteor.isClient).to.equal(false);
    });
  }
  HomePage();
  NewJobPostPage();
});
