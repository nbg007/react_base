import React, { Component } from 'react'
import Header from '../components/Header'

class App extends Component {
    static propTypes = {
        children: React.PropTypes.node
    }

    constructor(props) {
        super(props)
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
