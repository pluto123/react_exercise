// 本文件專門用於提供 store 對象，且整個應用只會有一個 store
// 引入創建 store 的方法
import {createStore} from 'redux'
// 引入為 Count 組件服務的 reducer
import countReducer from './count_reducer'

export default createStore(countReducer)