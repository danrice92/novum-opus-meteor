import React, { Component } from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import PostDetails from './PostDetails.js';

export default class Post extends Component {
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
          <Col>
            <Card>
              <CardBody>
                <CardTitle>
                  {title} at {company}
                </CardTitle>
                <CardSubtitle>
                  {pay} in {location}
                  <PostDetails key={id} collapse={collapse} post={post} />
                </CardSubtitle>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
