import * as BlogAPI from '../../api';

export const FETCH_POSTS = 'FETCH_POSTS'
export const DID_FETCH_POSTS = 'DID_FETCH_POSTS'

export const fetchPosts = () => (dispatch) => (
    BlogAPI.getAllPosts()
        .then(posts => { 
            console.log("Response", posts)
            dispatch(didFetchPosts(posts))
        })
        .catch(error => { 
            console.log("Error", error)
            dispatch(didFetchPosts())
        })
)

export const didFetchPosts = () => ({
    type: DID_FETCH_POSTS
})