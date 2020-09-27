import React, { Component } from 'react';

export default class Blog extends Component {
  state = {
    blog: [],
  };
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>Blog log</h1>
        <p>
          This was supposed to be a blog of all my endeavers during the
          hackathon, but it seemed like I was going to spend more time
          pontificating than actually hammering out this idea...
        </p>
      </div>
    );
  }
}
