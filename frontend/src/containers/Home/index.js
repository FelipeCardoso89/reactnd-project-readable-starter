import { connect } from "react-redux";
import {
  fetchPosts,
  fetchCategories,
  fetchPostsFromCategory,
  postDelete
} from "../../redux/actions";
import Home from "../../screens/Home";

const mapStateToProps = state => ({
  posts: state.post.posts,
  categories: state.category.categories
});

const mapDispatchToProps = dispatch => ({
  fetchAllPosts() {
    dispatch(fetchPosts());
  },
  fetchPosts({ category }) {
    dispatch(fetchPostsFromCategory(category))
  },
  fetchCategories() {
    dispatch(fetchCategories());
  },
  savePost(post) {
    console.log("Save post", post)
  },
  deletePost(postId) {
    dispatch(postDelete(postId));
  },
  votePost(post, voteUp) {
    console.log("Vote Post: ", post, voteUp)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
