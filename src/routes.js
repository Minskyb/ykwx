/**
 * Created by ASUS on 2016/6/2.
 */
import React from 'react';
import { Router, Route,IndexRoute,browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import Login from './containers/loginContainer.js'
import Home from './components/home'

import configureStore from './store/configureStore.js'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory,store);

const routes = (
    <Router history = { history }>
        <Route path="/" component={Login}></Route>
        <Route path="/home" component={Home}></Route>
    </Router>
)

export default routes;