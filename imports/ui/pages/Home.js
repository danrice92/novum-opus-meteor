import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Header from '../layouts/Header.js';
import JobPostList from '../components/JobPostList.js';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header/>
        <JobPostList />
      </Container>
    );
  }
}
