import React, { Component } from 'react'
import styled from 'styled-components'
import Post from '../../components/Post'
import Menu from '../../components/Menu'
import ScreenContainer from '../../components/ScreenContainer'

const PostsList = styled.div`
    display: flex;
    flex-direction: column;
`

class Home extends Component {
    componentDidMount() {
        this.props.fetchPosts()
    }

    postsList = (posts) => {
        return (
            <PostsList>
            {posts.map(post => <Post id={post.id} post={post}/>)}
            </PostsList>
        )
    }

    render() {
        return (
            <ScreenContainer>
                <Menu />
                {this.props.posts && this.postsList(this.props.posts)}
            </ScreenContainer>
        )
    }
}

export default Home