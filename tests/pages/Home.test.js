if (Meteor.isServer) {
  import 'jsdom-global/register';
}
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import { mount } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';

import Home from '../../imports/ui/pages/Home.js';

spy(Home.prototype, 'render');

export default function HomePage() {
  describe('<Home />', function() {
    it('calls render', function() {
      const wrapper = mount(<Home />);
      expect(Home.prototype.render).to.have.property('callCount', 1);
    })
  });
}
