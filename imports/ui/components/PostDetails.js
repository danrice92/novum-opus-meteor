import React, { Component } from 'react';
import { Col, Row, Collapse, Media } from 'reactstrap';

export default class PostDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { collapse } = this.props;
    const { pay_structure,
            benefits,
            cost_of_living_comparison,
            distance,
            description,
            industry,
            work_environment,
            qualification_needs,
            qualification_wants,
            likelihood,
            website
          } = this.props.post;

    return(
      <Collapse isOpen={collapse}>
        <Row>
          <Col xs={{ size: 12, offset: 1 }}>Pay Structure: {pay_structure}</Col>
          <Col xs={{ size: 12, offset: 1 }}>Benefits: {benefits}</Col>
          <Col xs={{ size: 12, offset: 1 }}>Cost of Living Comparison: {cost_of_living_comparison}</Col>
          <Col xs={{ size: 12, offset: 1 }}>Distance: {distance}</Col>
          <Col xs={{ size: 12, offset: 1 }}>Description: {description}</Col>
          <Col xs={{ size: 12, offset: 1 }}>Industry: {industry}</Col>
          <Col xs={{ size: 12, offset: 1 }}>Work Environment: {work_environment}</Col>
          <Col xs={{ size: 12, offset: 1 }}>Qualification Needs: {qualification_needs}</Col>
          <Col xs={{ size: 12, offset: 1 }}>Qualification Wants: {qualification_wants}</Col>
          <Col xs={{ size: 12, offset: 1 }}>Likelihood of getting the job: {likelihood}</Col>
          <Col xs={{ size: 12, offset: 1 }}>Website: {website}</Col>
        </Row>
      </Collapse>
    );
  }
}
