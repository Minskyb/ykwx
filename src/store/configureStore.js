/**
 * Created by ASUS on 2016/6/2.
 */
import { createStore,applyMiddleware,compose } from  'redux'
import {routerMiddleware} from 'react-router-redux'
import {browserHistory} from 'react-router'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'

const createStoreWithMiddleware = compose(
    applyMiddleware(
        thunkMiddleware,
        routerMiddleware(browserHistory)  // 提供动态路由跳转
    )
    ,window.devToolsExtension ? window.devToolsExtension() : f => f  // 判断是否安装了 redux-devTools chrome extension
)(createStore)

export default  function configureStore(initialState){
    const store = createStoreWithMiddleware(rootReducer,initialState);

    if(module.hot){
        module.hot.accept('../reducers/rootReducer',() => {
            const nextReducer = require('../reducers/rootReducer');
            store.replaceReducer(nextReducer);
        })
    }

    return store;
}