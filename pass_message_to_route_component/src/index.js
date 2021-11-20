// 引入 react 核心庫
import React from 'react'
// 引入 react-dom 庫
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
// 引入 App 組件
import App from './App'

// 渲染 App 到頁面上
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>, document.getElementById('root'))