if (Meteor.isServer) { import 'jsdom-global/register'; }
import React from 'react';

import { mount, render } from 'enzyme';
import { spy } from 'sinon';
import { expect } from 'chai';
import { _ } from 'meteor/underscore';
import faker from 'faker';

import { JobPosts } from '../../imports/api/jobposts.js';
import Home from '../../imports/ui/pages/Home.js';

Factory.define('jobPost', JobPosts, {
  annualPay: () => faker.random.number(),
  benefits: () => [faker.lorem.words(), faker.lorem.words()],
  company: () => faker.company.companyName(),
  createdAt: () => new Date(),
  description: () => faker.lorem.paragraph(),
  location: () => faker.address.city(),
  payStructure: () => faker.lorem.words(),
  qualificationNeeds: () => [faker.lorem.words(), faker.lorem.words()],
  qualificationWants: () => [faker.lorem.words(), faker.lorem.words()],
  title: () => faker.name.jobTitle(),
  website: () => faker.internet.url()
});

export default function ViewJobPosts() {
  const jobPosts = _.times(3, i => Factory.create('jobPost'));

  describe("Viewing jobPosts on the homepage", function() {
    spy(Home.prototype, 'render');

    it('calls render on the Home component', function() {
      const wrapper = mount(<Home />);
      expect(Home.prototype.render).to.have.property('callCount', 1);
    })

    it("renders jobPosts", function() {
      const wrapper = mount(<Home />);
      expect(wrapper.find('.job-posts')).to.have.lengthOf(1);

      if(Meteor.isClient) {
        expect(wrapper.find('Post')).to.have.lengthOf(3);
        expect(wrapper.html()).to.include(`${jobPosts[0].title} at ${jobPosts[0].company}`);
        expect(wrapper.html()).to.include(`${jobPosts[1].title} at ${jobPosts[1].company}`);
        expect(wrapper.html()).to.include(`${jobPosts[2].title} at ${jobPosts[2].company}`);
      }
    })

    it("opens the jobPost accordion when onClick is called", async function() {
      const wrapper = mount(<Home />);

      if(Meteor.isClient) {
        const firstPost = wrapper.find('Post').at(0);
        expect(firstPost.state('collapse')).to.equal(false);
        firstPost.find('Row').first().prop('onClick')();
        expect(firstPost.state('collapse')).to.equal(true);
      }
    })
  })
}
