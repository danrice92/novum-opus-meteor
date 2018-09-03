import React, { Component } from 'react';

export default class JobPost extends Component {
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
      <li>
        <h2>{title}</h2>
        <p>Company: {company}</p>
        <p>Pay: {pay}</p>
        <p>Cost of Living Compared to Your Location: {cost_of_living_comparison}</p>
        <p>Location: {location}</p>
        <p>Likelihood of getting the job: {likelihood}</p>
      </li>
    )
  }
}
