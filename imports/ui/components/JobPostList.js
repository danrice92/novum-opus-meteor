import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { JobPosts } from '../../api/jobposts.js';
import JobPost from '../components/JobPost.js';

class JobPostList extends Component {
  renderJobPosts() {
    return this.props.jobposts.map((post) => (
      <JobPost key={post._id} post={post} />
    ));
  }

  render() {
    return (
      <div className="job-posts">
        <h2 className="page-header">Recent Job Posts</h2>
        {this.renderJobPosts()}
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    jobposts: JobPosts.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
})(JobPostList);
