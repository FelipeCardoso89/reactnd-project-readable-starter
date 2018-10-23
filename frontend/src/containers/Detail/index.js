import { connect } from "react-redux";
import { fetchPost, fetchPostComments } from "../../redux/actions";
import Detail from "../../screens/Detail";

const mapStateToProps = state => ({
    post: state.currentPost.post,
    comments: state.currentPost.comments
});

const mapDispatchToProps = dispatch => ({
    getPost(postId) {
        dispatch(fetchPost(postId));
    },
    getComments(postId) {
       dispatch(fetchPostComments(postId)); 
    },
    deleteComment(commentId) {
        console.log("Delete Comment:", commentId)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);