import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchArticles, changePage } from '../actions'
import { Pagination } from 'antd'
import 'antd/dist/antd.less'

import Home from '../components/Home'
import * as actionCreators from '../actions/index'

class HomeContainer extends Component {

    componentDidMount() {
        this.props.fetchArticles()
    }

    onRefreshClick() {
        this.props.fetchArticles()
    }

    handlePaginationChange(currentPage) {
        this.props.changePage(currentPage)
    }

    render() {
        const { isFetching, posts, currentPage } = this.props
        return (
            <div>
                <button className="btn btn-primary" onClick={::this.onRefreshClick}>Refresh</button>
                {isFetching ? <h4>Loading..</h4> : <Home posts={posts} currentPage={currentPage}/>}
                {isFetching ? null : <Pagination defaultCurrent={currentPage} total={posts.length} onChange={::this.handlePaginationChange}/>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { posts, isFetching, currentPage } = state

    return {
        posts,
        isFetching,
        currentPage,
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
