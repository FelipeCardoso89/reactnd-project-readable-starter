import { connect } from "react-redux";
import Add from "../../screens/Add";
import { fetchCategories } from "../../redux/actions";

const mapStateToProps = state => ({
    categories: state.category.categories || []
});
const mapDispatchToProps = dispatch => ({
    fetchCategories() {
        dispatch(fetchCategories());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Add);