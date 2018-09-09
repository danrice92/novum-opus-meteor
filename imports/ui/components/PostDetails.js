import React, { Component } from 'react';
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardLink, Button, CardHeader, CardFooter, Collapse, Media } from 'reactstrap';

export default class PostDetails extends Component {
  constructor(props) {
    super(props);
  }

  showList(list) {
    if (list.length == 0) {
      return "None";
    } else {
      return list.join(', ');
    }
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
          <ul>
            <li>Pay Structure: {pay_structure}</li>
            <li>Benefits: {this.showList(benefits)}</li>
            <li>Cost of Living: {cost_of_living_comparison}</li>
            <li>Description: {description}</li>
            <li>Industry: {this.showList(industry)}</li>
            <li>Work Environment: {work_environment}</li>
            <li>Qualification Needs: {this.showList(qualification_needs)}</li>
            <li>Qualification Wants: {this.showList(qualification_wants)}</li>
            <li>Interested? <a href={website}>Apply now!</a></li>
          </ul>
      </Collapse>
    );
  }
}
