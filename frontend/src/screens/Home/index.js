import React, { Component } from 'react'
import { Button } from 'reactstrap';

class Home extends Component {
    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        return (
            <div className="App">
            <Button>Teste</Button>
            </div>
        )
    }
}

export default Home