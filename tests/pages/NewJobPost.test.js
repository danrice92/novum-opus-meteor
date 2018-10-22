if (Meteor.isServer) { import 'jsdom-global/register'; }
import React from 'react';

import { mount } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';

import NewJobPost from '../../imports/ui/pages/NewJobPost.js';

spy(NewJobPost.prototype, 'render');

export default function NewJobPostPage() {
  describe('<NewJobPost />', function() {
    it('calls render', function() {
      const wrapper = mount(<NewJobPost />);
      expect(NewJobPost.prototype.render).to.have.property('callCount', 1);
    })
  });
}
