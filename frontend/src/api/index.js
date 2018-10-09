const api = 'http://localhost:3000';
const defaultParameters = { headers: { Authorization: 'granted' } };

export const getAllPosts = () => fetch(`${api}/posts`, defaultParameters).then(response => response.json() );