import React, { Component, PropTypes } from 'react'
import Header from '../components/Header'

class App extends Component {
    static propTypes = {
        children: PropTypes.node
    }

    render() {
        return (
            <div className="container">
                <Header />
                <div className="main">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default App
