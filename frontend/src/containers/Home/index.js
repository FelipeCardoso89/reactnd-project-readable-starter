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
  fetchPosts({ category }) {
    category && category !== "all"
      ? dispatch(fetchPostsFromCategory(category))
      : dispatch(fetchPosts());
  },
  fetchCategories() {
    dispatch(fetchCategories());
  },
  fetchInitialData() {
    dispatch(fetchPosts());
    dispatch(fetchCategories());
  },
  deletePost(post) {
    dispatch(postDelete(post));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
