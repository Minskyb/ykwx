/**
 * Created by ASUS on 2016/6/2.
 */


require('babel-polyfill');
require('es5-shim'); // es5 属性支持，比如 Array.map 等
require('es5-shim/es5-sham');
require('console-polyfill');  // ie8 的 console.log  兼容。ie8 使用 console。.log 后只有在 dug 模式下才能正常显示的问题

import React from 'react'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore.js'

import { render } from 'react-dom'
import routes from './routes.js'

const store = configureStore();

render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById("app")
);

if (module.hot) {
    module.hot.accept('./containers/loginContainer.js', () => {
        const LoginForm = require('./containers/loginContainer.js');
        render(
            <Provider store={store}>
                {routes}
            </Provider>,
            document.getElementById('app')
        );
    });
}
