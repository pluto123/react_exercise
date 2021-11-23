// 引入 react 核心庫
import React from 'react'
// 引入 react-dom 庫
import ReactDOM from 'react-dom'
// 引入 App 組件
import App from './App'
import store from './redux/store'

ReactDOM.render(<App/>, document.getElementById('root'))

store.subscribe(()=>{
    ReactDOM.render(<App/>, document.getElementById('root'))
})