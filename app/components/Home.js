import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props)
    }

    renderItem({title}, id) {
        let min = (this.props.currentPage - 1) * 10
        let max = min + 9
        if(id >= min && id <= max) {
            return <li className="render-li" key={id}>{title}</li>
        } else {
            return null
        }
        
    }

    render() {
        return (
            <div>
                <ul style={{'paddingLeft': 0}}>{this.props.posts.map(::this.renderItem)}</ul>
            </div>
        )
    }
}

export default Home
