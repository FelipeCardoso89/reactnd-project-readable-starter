import { connect } from "react-redux";
import { fetchPosts, fetchCategories } from "../../redux/actions";
import Home from "../../screens/Home";

const mapStateToProps = state => ({
  posts: state.post.posts,
  categories: state.category.categories
});

const mapDispatchToProps = dispatch => ({
  fetchPosts() {
    dispatch(fetchPosts());
    dispatch(fetchCategories());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
