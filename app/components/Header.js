import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">Home</Link>
                        <Link className="navbar-brand active" to="/about">About</Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header
