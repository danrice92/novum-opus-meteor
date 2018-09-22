import React, { Component } from 'react';
import { Container } from 'reactstrap';
import JobPostList from '../layouts/JobPostList.js';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <header>
          <h1>Novum Opus</h1>
          <div>Pay the bills. Get qualified. Launch your career, debt-free.</div>
        </header>
        <br />
        <JobPostList />
      </Container>
    );
  }
}
