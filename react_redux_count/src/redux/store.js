// 本文件專門用於提供 store 對象，且整個應用只會有一個 store
// 引入創建 store 的方法
import {createStore, applyMiddleware} from 'redux'
// 引入 redux-thunk 用於處理異步 action
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './reducers'

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))