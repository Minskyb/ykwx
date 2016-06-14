/**
 * Created by ASUS on 2016/6/2.
 */
import { combineReducers } from 'redux'

import { routerReducer } from 'react-router-redux'
import loginReducer from './loginReducer.js'

const rootReducer = combineReducers({
    routing:routerReducer,
    login:loginReducer
});

export default  rootReducer