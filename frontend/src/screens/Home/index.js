import React, { Component } from 'react'
import ScreenContainer from '../../components/ScreenContainer'

class Home extends Component {
    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        return (
            <ScreenContainer/>
        )
    }
}

export default Home