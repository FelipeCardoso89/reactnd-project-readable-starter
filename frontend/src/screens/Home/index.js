import React, { Component } from "react";

class Home extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log("Categories", this.props);
    return <div />;
  }
}

export default Home;
