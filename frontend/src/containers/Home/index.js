import { connect } from "react-redux";
import {
  fetchPosts,
  fetchCategories,
  fetchPostsFromCategory,
  postDelete,
  createPost,
} from "../../redux/actions";
import Home from "../../screens/Home";

const mapStateToProps = state => ({
  posts: state.post.posts,
  categories: state.category.categories || []
});

const mapDispatchToProps = dispatch => ({
  fetchAllData() {
    dispatch(fetchPosts());
    dispatch(fetchCategories());
  },
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
    dispatch(createPost(post))
  },
  deletePost(post) {
    dispatch(postDelete(post));
  },
  votePost(post, voteUp) {
    console.log("Vote Post: ", post, voteUp)
    dispatch(postDelete(post));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
