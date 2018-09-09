import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import PostDetails from './PostDetails.js';

export default class PostRow extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false };
  }

  toggleDetails(id) {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const { post } = this.props;
    const { id, title, company, pay, location } = this.props.post;
    const { collapse } = this.state;

    return (
      <div className="post">
        <Row onClick={() => this.toggleDetails(id)}>
          <Col xs="6">{title}</Col>
          <Col xs="2">{company}</Col>
          <Col xs="2">{pay}</Col>
          <Col xs="2">{location}</Col>
        </Row>
        <PostDetails key={id} collapse={collapse} post={post} />
      </div>
    );
  }
}
