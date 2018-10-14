import 'jsdom-global/register';
import React from 'react';
import assert from "assert";
import Home from '../imports/ui/pages/Home.js';
import chai from "chai";
import { expect } from 'chai';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';

Enzyme.configure({ adapter: new Adapter() })

describe('novum-opus', () => {
  it("has the correct package.json name", async function() {
    const { name } = await import("../package.json");
    expect(name).to.equal("novum-opus");
  });

  if (Meteor.isClient) {
    it("is not the server", () => {
      expect(Meteor.isServer).to.equal(false);
    });
  }

  if (Meteor.isServer) {
    it("is not the client", () => {
      expect(Meteor.isClient).to.equal(false);
    });
  }
});

spy(Home.prototype, 'render');

describe('<Home />', () => {
  it('calls render', () => {
    const wrapper = mount(<Home />);
    expect(Home.prototype.render).to.have.property('callCount', 1);
  })
})
