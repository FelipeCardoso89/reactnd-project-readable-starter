import React, { Component } from 'react'

class Home extends Component {
    componentDidMount() {
        console.log("Props", this.props)
    }

    handleClick = () => {
        this.props.fetchPosts()
    }

    render() {
        return (
            <div className="App">Página principal
                <button onClick={this.handleClick}>
                    Activate Lasers
                </button>
            </div>
        )
    }
}

export default Home