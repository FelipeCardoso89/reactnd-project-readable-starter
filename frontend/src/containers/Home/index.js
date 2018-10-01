import { connect } from 'react-redux'
import Home from '../../screens/Home'

const mapStateToProps = state => ({
    posts: state.posts
})

const mapDispatchToProps = (dispatch) => ({
    fetchPosts:() => dispatch(fetchPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)