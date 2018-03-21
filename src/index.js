import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import reducer from './reducers'
import App from './containers/App'
import HomeContainer from './containers/HomeContainer'
import About from './components/About'

import './style/index.less'

// create middleware stack
const middleware = [thunk]

// create redux store with root reducer and middleware stack
const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={HomeContainer} />
                <Route path="/about" component={About} />
            </Route>
        </Router>
    </Provider>, 
    document.getElementById('root')
)
