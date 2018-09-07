import React, { Component } from 'react';

export default class PostRow extends Component {
  render() {
    const { id,
            title,
            company,
            pay,
            cost_of_living_comparison,
            location,
            likelihood
          } = this.props.post;
    return (
      <tr>
        <td>{title}</td>
        <td>{company}</td>
        <td>{pay}</td>
        <td>{location}</td>
      </tr>
    )
  }
}
