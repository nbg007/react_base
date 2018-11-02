import React from 'react'
import PropTypes from 'prop-types'

class Home extends Component {
    static propTypes = {
        posts: PropTypes.array.isRequired
    }
    
    renderItem({title}, id) {
        const min = (this.props.currentPage - 1) * 10
        const max = min + 9
        if(id >= min && id <= max) {
            return <li className="render-li" key={id}>{title}</li>
        } else {
            return null
        }
        
    }

    render() {
        const {posts} = this.props

        return (
            <div>
                <ul style={{'paddingLeft': 0}}>{posts.map(::this.renderItem)}</ul>
            </div>
        )
    }
}

export default Home
