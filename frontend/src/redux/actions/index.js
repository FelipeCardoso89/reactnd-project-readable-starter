import * as BlogAPI from '../../api';

export const FETCH_POSTS_START = 'FETCH_POSTS_START'
export const FETCH_POSTS_COMPLETE = 'FETCH_POSTS_COMPLETE'
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR'

export const fetchPosts = () => (dispatch) => {
    dispatch(fetchingPostsStart())
    return BlogAPI.getAllPosts().then(posts => { 
        dispatch(fetchPostsComplete(posts))
    }).catch(error => { 
        dispatch(fetchingPostsError(null, error))
    })
}

export const fetchingPostsStart = () => ({
    type: FETCH_POSTS_START
})

export const fetchPostsComplete = posts => ({
    type: FETCH_POSTS_COMPLETE,
    posts
})

export const fetchingPostsError = error => ({
    type: FETCH_POSTS_ERROR,
    error
})