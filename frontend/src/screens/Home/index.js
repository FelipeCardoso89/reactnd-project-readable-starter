import React, { Component } from 'react'

class Home extends Component {
    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        console.log(this.props.posts)
        return (
            <div className="App">
                {`Número de Posts: ${(this.props.posts && this.props.posts.length) || `0`}`}
            </div>
        )
    }
}

export default Home