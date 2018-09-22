import React, { Component } from 'react';
import { Collapse } from 'reactstrap';

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
    const { payStructure,
            benefits,
            description,
            qualificationNeeds,
            qualificationWants,
            website
          } = this.props.post;

    return(
      <Collapse isOpen={collapse}>
          <ul>
            <li>Pay Structure: {payStructure}</li>
            <li>Benefits: {this.showList(benefits)}</li>
            <li>Description: {description}</li>
            <li>Required Qualifications: {this.showList(qualificationNeeds)}</li>
            <li>Preferred Qualifications: {this.showList(qualificationWants)}</li>
            <li>Interested? <a href={website}>Apply now!</a></li>
          </ul>
      </Collapse>
    );
  }
}
