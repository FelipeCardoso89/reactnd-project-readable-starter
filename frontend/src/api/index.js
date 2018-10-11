const api = 'http://localhost:3001';
const defaultParameters = { headers: { Authorization: 'whatever-you-want' } };
// Category
export const getCategories = () => fetch(`${api}/categories`, defaultParameters).then(response => response.json());
export const getPostsFromCategory = category => fetch(`${api}/${category}/posts`, defaultParameters).then(response => response.json());

// Posts
export const getPosts = () => fetch(`${api}/posts`, defaultParameters).then(response => response.json());
export const addPost = post => fetch(`${api}/posts`, Object.assign(defaultParameters, { method: 'posts', body: post })).then(response => response.json());
export const getPost = postId => fetch(`${api}/posts/${postId}`, defaultParameters).then(response => response.json());
export const editPost = (postId, title, content) => fetch(`${api}/posts/${postId}`, Object.assign(defaultParameters, { method: 'PUT', body: {title, body: content}})).then(response => response.json());
export const deletePost = postId => fetch(`${api}/posts/${postId}`, Object.assign(defaultParameters, { method: 'DELETE' })).then(response => response.json());
export const votePost = (postId, voting) => fetch(`${api}/posts/${postId}`, Object.assign(defaultParameters, { method: 'POST', body: voting })).then(response => response.json());

//Comments
export const getCommentsFromPost = (postId) => fetch(`${api}/posts/${postId}/comments`, defaultParameters).then(response => response.json());
export const addCommentToPost = (postId, commment) => fetch(`${api}/comments`, Object.assign(defaultParameters, { method: 'POST', body: Object.assign(commment, { parentId: postId })})).then(response => response.json());
export const getComment = (commentId) => fetch(`${api}/comments/${commentId}`, defaultParameters).then(response => response.json());
export const voteComment = (commentId, voting) => fetch(`${api}/comments/${commentId}`, Object.assign(defaultParameters, { method: 'POST', body: voting })).then(response => response.json());
export const editComment = (commentId, content, timestamp) => fetch(`${api}/comments/${commentId}`, Object.assign(defaultParameters, { method: 'PUT', body: {timestamp, body: content}})).then(response => response.json());
export const deleteComment = (commentId) => fetch(`${api}/comments/${commentId}`, Object.assign(defaultParameters, { method: 'DELETE' })).then(response => response.json());