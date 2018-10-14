import React, { Component } from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import JobPostDetails from './JobPostDetails.js';

const numberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

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
    const { _id, title, company, annualPay, location } = this.props.post;
    const { collapse } = this.state;

    return (
      <div className="post">
        <Row onClick={() => this.toggleDetails(_id)}>
          <Col>
            <Card>
              <CardBody>
                <CardTitle>
                  {title} at {company}
                </CardTitle>
                <CardSubtitle>
                  ${numberWithCommas(annualPay)}/year in {location}
                  <JobPostDetails key={_id} collapse={collapse} post={post} />
                </CardSubtitle>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
