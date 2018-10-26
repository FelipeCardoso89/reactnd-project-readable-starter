import { connect } from "react-redux";
import { fetchPost, postDelete, fetchPostComments } from "../../redux/actions";
import Detail from "../../screens/Detail";

const mapStateToProps = state => ({
    post: state.currentPost.post,
    comments: state.currentPost.comments
});

const mapDispatchToProps = dispatch => ({
    getPost(post) {
        dispatch(fetchPost(post));
    },
    deletePost(post) {
        dispatch(postDelete(post));
    },
    savePost(post) {
        console.log("Save Post", post)
    },
    getComments(post) {
       dispatch(fetchPostComments(post)); 
    },
    voteComment(comment, voteUp) {
        console.log("Comment Vote:", comment, voteUp)
    },
    saveComment(comment) {
        console.log("Save comment:", comment)
    },
    deleteComment(comment) {
        console.log("Delete Comment:", comment)
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);