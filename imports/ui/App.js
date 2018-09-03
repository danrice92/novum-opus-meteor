import React, { Component } from 'react';
import JobPost from './components/JobPost.js';

export default class App extends Component {
  getJobPosts() {
    return [
      { id: 1,
        title: "Mobile Expert at T-Mobile in Greeley",
        company: "T-Mobile",
        pay: "$50,000/year",
        benefits: ["Company Healthcare", "Paid Time Off"],
        cost_of_living_comparison: "Livable for a debt-free individual in Loveland, CO. Having a roommate is recommended due to cost of living in your area.",
        location: "Greeley, CO",
        distance: "30 miles from you",
        description: "T-Mobile is the Un-Carrier! Sell phones to people who don't care.",
        industry: ["Telecommunications, Retail"],
        work_environment: "Retail sales floor",
        qualification_needs: ["High school degree"],
        qualification_wants: ["Bilingual", "College degree", "1 year experience retail/sales"],
        likelihood: "moderate",
        website: "https://www.t-mobile.com"
      },
      { id: 2,
        title: "Cashier at Target in Fort Collins",
        company: "Target",
        pay: "$15,000/year",
        benefits: [],
        cost_of_living_comparison: "We hope you're living with your parents if you get this job.",
        location: "Fort Collins, CO",
        distance: "20 miles from you",
        description: "Target is like Wal-Mart but for middle-class moms who like to complain at the cashier. You could be that cashier!",
        industry: ["Retail"],
        work_environment: "Retail sales floor",
        qualification_needs: ["A pulse"],
        qualification_wants: ["High school degree"],
        likelihood: "extremely high",
        website: "https://www.target.com"
      }
    ]
  }

  renderJobPosts() {
    return this.getJobPosts().map((post) => (
      <JobPost key={post.id} post={post} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Novum Opus</h1>
        </header>

        <div>Pay the bills. Get qualified. Launch your career, debt-free.</div>

        <ul>
          {this.renderJobPosts()}
        </ul>
      </div>
    );
  }
}