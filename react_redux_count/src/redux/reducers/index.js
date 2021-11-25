import {combineReducers} from 'redux'
// 引入為組件服務的 reducer
import count from './count'
import persons from './person'

// 匯總所有的 reducer 變為
export default combineReducers({
    count,
    persons
})