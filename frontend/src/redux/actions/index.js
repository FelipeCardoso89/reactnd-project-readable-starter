import {
  getPosts,
  deletePost,
  addPost,
  getCategories,
  getPostsFromCategory
} from "../../api";

// Posts
//FETCH
export const FETCH_POSTS_START = "FETCH_POSTS_START";
export const FETCH_POSTS_COMPLETE = "FETCH_POSTS_COMPLETE";
export const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR";

//DELETE
export const DELETE_POST_START = "DELETE_POST_START";
export const DELETE_POST_COMPLETE = "DELETE_POST_COMPLETE";
export const DELETE_POST_ERROR = "DELETE_POST_ERROR";

//CREATE
export const CREATE_POST_START = "CREATE_POST_START";
export const CREATE_POST_COMPLETE = "CREATE_POST_COMPLETE";
export const CREATE_POST_ERROR = "CREATE_POST_ERROR";

export const createPost = post => dispatch => {
  dispatch(createPostStart());
  return addPost(post)
    .then(post => {
      dispatch(createPostComplete(post))
    })
    .catch(error => {
      dispatch(createPostError(error))
    })
}

export const postDelete = post => dispatch => {
  dispatch(deletePostStart());
  return deletePost(post.id)
    .then(response => {
      dispatch(deletePostComplete());
    })
    .catch(error => {
      dispatch(deletePostError(null, error));
    });
};

export const fetchPostsFromCategory = category => dispatch => {
  dispatch(fetchingPostsStart());
  return getPostsFromCategory(category)
    .then(posts => {
      dispatch(fetchPostsComplete(posts));
    })
    .catch(error => {
      dispatch(fetchingPostsError(null, error));
    });
};

export const fetchPosts = () => dispatch => {
  dispatch(fetchingPostsStart());
  return getPosts()
    .then(posts => {
      dispatch(fetchPostsComplete(posts));
    })
    .catch(error => {
      dispatch(fetchingPostsError(null, error));
    });
};

export const fetchingPostsStart = () => ({
  type: FETCH_POSTS_START
});

export const fetchPostsComplete = posts => ({
  type: FETCH_POSTS_COMPLETE,
  posts
});

export const fetchingPostsError = error => ({
  type: FETCH_POSTS_ERROR,
  error
});

export const deletePostStart = () => ({
  type: DELETE_POST_START
});

export const deletePostComplete = post => ({
  type: DELETE_POST_COMPLETE
});

export const deletePostError = error => ({
  type: DELETE_POST_ERROR,
  error
});

export const createPostStart = () => ({
  type: CREATE_POST_START
})

export const createPostComplete = () => ({
  type: CREATE_POST_COMPLETE
})

export const createPostError = (error) => ({
  type: CREATE_POST_ERROR,
  error
})

// Post
export const FETCH_POST_START = "FETCH_POST_START";
export const FETCH_POST_COMPLETE = "FETCH_POST_COMPLETE";
export const FETCH_POST_ERROR = "FETCH_POST_ERROR";

//Comments
export const FETCH_COMMENTS_START = "FETCH_POST_START";
export const FETCH_COMMENTS_COMPLETE = "FETCH_POST_COMPLETE";
export const FETCH_COMMENTS_ERROR = "FETCH_POST_ERROR";

// Categories
export const FETCH_CATEGORIES_START = "FETCH_CATEGORIES_START";
export const FETCH_CATEGORIES_COMPLETE = "FETCH_CATEGORIES_COMPLETE";
export const FETCH_CATEGORIES_ERROR = "FETCH_CATEGORIES_ERROR";

export const fetchCategories = () => dispatch => {
  dispatch(fetchingCategoriesStart());
  return getCategories()
    .then(category => {
      dispatch(fetchCategoriesComplete(category.categories));
    })
    .catch(error => {
      dispatch(fetchingCategoriesError(null, error));
    });
};

export const fetchingCategoriesStart = () => ({
  type: FETCH_CATEGORIES_START
});

export const fetchCategoriesComplete = categories => ({
  type: FETCH_CATEGORIES_COMPLETE,
  categories
});

export const fetchingCategoriesError = error => ({
  type: FETCH_CATEGORIES_ERROR,
  error
});
