import React, { Component } from "react";
import PostsList from "../../components/PostsList";
import Post from "../../components/Post";
import { ScreenContainer } from "./styles";

class Home extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log("Categories", this.props);
    return (
      <ScreenContainer>
        <PostsList categories={this.props.categories || []}>
          {this.props.posts &&
            this.props.posts.map(post => <Post key={post.id} post={post} />)}
        </PostsList>
      </ScreenContainer>
    );
  }
}

export default Home;
