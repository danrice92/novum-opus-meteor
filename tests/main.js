import { Meteor } from 'meteor/meteor';
import { expect } from 'chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NewJobPostPage from './pages/NewJobPost.test.js';
import ViewJobPosts from './features/ViewJobPosts.test.js';

describe('novum-opus', function() {
  beforeEach(function() {
    resetDatabase();
    Enzyme.configure({ adapter: new Adapter() });
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

  NewJobPostPage();
  ViewJobPosts();
});
