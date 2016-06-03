/**
 * Created by ASUS on 2016/6/2.
 */
import { createStore,applyMiddleware,compose } from  'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers/reducer/rootReducer'

import { NODE_ENV } from '../appConfig.js'

let createStoreWidthMiddleware ;

if( NODE_ENV == "development"){

    const { persistState } = require('redux-devtools');
    const DevTools = require('../containers/DevTools');

    createStoreWidthMiddleware = compose(
        applyMiddleware(
            thunkMiddleware
        ),
        DevTools.instrument(),
        persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(createStore)
} else {
    createStoreWithMiddleware = compose(
        applyMiddleware(
            thunkMiddleware
        )
        ,window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore)
}

export default  function configureStore(initialState){
    const store = createStoreWidthMiddleware(rootReducer,initialState);

    if(module.hot){
        module.hot.accept('../reducers/rootReducer',() => {
            const nextReducer = require('../reducers/rootReducer');
            store.replaceReducer(nextReducer);
        })
    }

    return store;
}