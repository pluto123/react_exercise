// 引入 Count 的 UI 組件
import CountUI from '../../components/Count'
// 引入 connect 用於連接 UI 組件與 redux
import {connect} from 'react-redux'
import { createDecrementAction, createIncrementAction, createIncrementAsyncAction } from '../../redux/count_action'

// 創建並曝露一個 Count 的容器組件
export default connect(
    // connect() 第一個參數用來映射狀態，返回值是一個對象，即會透過 UI 組件的 props 傳遞狀態
    state => ({count:state}),
    // 第二個參數用來映射操作狀態的方法，返回值也是一個對象，即會透過 UI 組件的 props 傳遞狀態
    dispatch => ({
        increment: (number) => dispatch(createIncrementAction(number)),
        decrement: (number) => dispatch(createDecrementAction(number)),
        incrementAsync: (number, time)=>dispatch(createIncrementAsyncAction(number, time))
    })
)(CountUI)