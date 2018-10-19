import { connect } from "react-redux";
import Add from "../../screens/Add";
import { fetchCategories, createPost } from "../../redux/actions";


const mapStateToProps = state => ({
    categories: state.category.categories || []
});
const mapDispatchToProps = dispatch => ({
    fetchCategories() {
        dispatch(fetchCategories());
    },
    addNewPost(data) {
        dispatch(createPost(data))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Add);