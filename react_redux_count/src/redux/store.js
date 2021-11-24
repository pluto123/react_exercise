// 本文件專門用於提供 store 對象，且整個應用只會有一個 store
// 引入創建 store 的方法
import {
    createStore, 
    applyMiddleware, 
    combineReducers
} from 'redux'
// 引入為 Count 組件服務的 reducer
import countReducer from './reducers/count'
import personReducer from './reducers/person'
// 引入 redux-thunk 用於處理異步 action
import thunk from 'redux-thunk'

// 匯總所有的 reducer 變為
const allReducer = combineReducers({
    count: countReducer,
    persons: personReducer
})

export default createStore(allReducer, applyMiddleware(thunk))