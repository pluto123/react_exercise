// 引入 react 核心庫
import React from 'react'
// 引入 react-dom 庫
import ReactDOM from 'react-dom'
// 引入 App 組件
import App from './App'
import store from './redux/store'
import {Provider} from 'react-redux'


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
)