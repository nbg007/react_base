export const REQUEST_ARTICLES = 'REQUEST_ARTICLES'
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES'
export const CHANGE_PAGE = 'CHANGE_PAGE'
export const REQUEST_FAILED = 'REQUEST_FAILED'

export const changePage = (currentPage) => ({
    type: CHANGE_PAGE,
    currentPage,
})

export const requestArticles = () => ({
    type: REQUEST_ARTICLES,
})

export const receiveArticles = json => ({
    type: RECEIVE_ARTICLES,
    posts: json.hits,
})

export const requestFailed = () => ({
    type: REQUEST_FAILED,
})

export const fetchArticles = () => async (dispatch) => {
    try {
        dispatch(requestArticles())
        const response = await fetch('https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=50')
        if (!response.ok) throw 'Response not OK'
        const json = await response.json()
        dispatch(receiveArticles(json))
    } catch (e) {
        dispatch(requestFailed())
        console.log('error:', e)
    }
}
