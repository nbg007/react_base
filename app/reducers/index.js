import { RECEIVE_ARTICLES, REQUEST_ARTICLES, CHANGE_PAGE, REQUEST_FAILED } from '../actions'

const initialState = {
    posts: [],
    isFetching: false,
    currentPage: 1
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_ARTICLES:
            return {...state,
                isFetching: true,
                currentPage: 1
            }

        case RECEIVE_ARTICLES:
            return {...state,
                posts: action.posts,
                isFetching: false,
            }

        case CHANGE_PAGE:
            const { currentPage } = action
            return {...state, currentPage}

        case REQUEST_FAILED:
            return initialState

        default:
            return state
    }
}

export default rootReducer
