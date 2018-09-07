import React, { Component } from 'react';
import { Container } from 'reactstrap';
import JobPosts from './pages/JobPosts.js';

export default class App extends Component {
  render() {
    return (
      <Container>
        <header>
          <h1>Novum Opus</h1>
        </header>
        <div>Pay the bills. Get qualified. Launch your career, debt-free.</div>
        <br />
        <JobPosts />
      </Container>
    );
  }
}
