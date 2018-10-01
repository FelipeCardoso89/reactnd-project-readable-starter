export const FETCH_POSTS = 'FETCH_POSTS'
export const DID_FETCH_POSTS = 'DID_FETCH_POSTS'

const url = 'http://localhost:3000'

export const fetchPosts = (): ThunkAction => (dispatch) => {

    if(!this.fetch) {
        return Promise.reject()
    }

    return fetch(url.concat('/posts'), { headers: { 'Authorization': 'whatever-you-want' }})
        .then(response => { 
            let { posts } = response
            dispatch(didFetchPosts(posts))
        })
}

export const didFetchPosts = (posts) => (dispatch) => ({
    type: DID_FETCH_POSTS,
    posts
})

export default createPost