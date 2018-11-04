import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';
import Header from '../layouts/Header.js';
import { JobPosts } from '../../api/jobposts.js';
import { withRouter } from 'react-router';

export default class NewJobPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      company: '',
      annualPay: '',
      location: '',
      payStructure: '',
      benefits: [],
      description: '',
      qualificationNeeds: [],
      qualificationWants: [],
      website: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  arrayConversion(data) {
    return data.toString().split(', ');
  }

  handleSubmit(event) {
    event.preventDefault();

    JobPosts.insert({
      title: this.state.title,
      company: this.state.company,
      annualPay: this.state.annualPay,
      location: this.state.location,
      payStructure: this.state.payStructure,
      benefits: this.arrayConversion(this.state.benefits),
      description: this.state.description,
      qualificationNeeds: this.arrayConversion(this.state.qualificationNeeds),
      qualificationWants: this.arrayConversion(this.state.qualificationWants),
      website: this.state.website,
      createdAt: new Date()
    });

    this.setState({
      title: '',
      company: '',
      annualPay: '',
      location: '',
      payStructure: '',
      benefits: [],
      description: '',
      qualificationNeeds: [],
      qualificationWants: [],
      website: ''
    });
    
    this.props.history.push("/");
  }

  render() {
    return (
      <Container>
        <Header/>
        <div className="job-post-form">
          <h2 className="page-header">Create a new Job Post</h2>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="title">Job Title</Label>
              <Input
                type="text"
                name="title"
                id="title"
                placeholder="Sales Consultant"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="company">Company</Label>
              <Input
                type="text"
                name="company"
                id="company"
                placeholder="Awesome Corp"
                value={this.state.company}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="annualPay">Annual Pay</Label>
              <Input
                type="number"
                name="annualPay"
                id="annualPay"
                placeholder="75000"
                value={this.state.annualPay}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="location">Location</Label>
              <Input
                type="text"
                name="location"
                id="location"
                placeholder="Loveland, CO"
                value={this.state.location}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="payStructure">Pay Structure</Label>
              <Input
                type="text"
                name="payStructure"
                id="payStructure"
                placeholder="Salaried plus commission bonus"
                value={this.state.payStructure}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="benefits">Benefits</Label>
              <Input
                type="text"
                name="benefits"
                id="benefits"
                placeholder="Healthcare, 6 weeks paid vacation"
                value={this.state.benefits}
                onChange={this.handleChange}
              />
              <FormText color="muted">
                Separate each benefit with a comma and a space.
              </FormText>
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="textarea"
                name="description"
                id="description"
                placeholder="This job is amazing! It offers great pay and a great work environment. Come work for us!"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="qualificationNeeds">Required Qualifications</Label>
              <Input
                type="text"
                name="qualificationNeeds"
                id="qualificationNeeds"
                placeholder="High School Degree, CPR certification"
                value={this.state.qualificationNeeds}
                onChange={this.handleChange}
              />
              <FormText color="muted">
                Separate each requirement with a comma and a space.
              </FormText>
            </FormGroup>
            <FormGroup>
              <Label for="qualificationWants">Preferred Qualifications</Label>
              <Input
                type="text"
                name="qualificationWants"
                id="qualificationWants"
                placeholder="Bachelor's Degree, Previous sales experience"
                value={this.state.qualificationWants}
                onChange={this.handleChange}
              />
              <FormText color="muted">
                Separate each preference with a comma and a space.
              </FormText>
            </FormGroup>
            <FormGroup>
              <Label for="website">Application URL</Label>
              <Input
                type="text"
                name="website"
                id="website"
                placeholder="https://www.google.com"
                value={this.state.website}
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button onClick={this.handleSubmit}>Submit</Button>
          </Form>
        </div>
        <br />
      </Container>
    );
  }
}
