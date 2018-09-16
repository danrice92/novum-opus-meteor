import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { JobPosts } from '../../api/jobposts.js';
import Post from '../components/Post.js';

class JobPostList extends Component {
  renderJobPosts() {
    return this.props.jobposts.map((post) => (
      <Post key={post._id} post={post} />
    ));
  }

  render() {
    return (
      <div className="job-posts">
        {this.renderJobPosts()}
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    jobposts: JobPosts.find({}).fetch(),
  };
})(JobPostList);
