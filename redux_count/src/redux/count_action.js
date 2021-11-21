// 為 Count 組件生成 action 對象
/*function createIncrementAction(data) {
    return {type:'increment', data}
}*/

import { DECREMENT, INCREMENT } from "./constant"
//import store from "./store"

// 可精簡為下
export const createIncrementAction = data => ({type:INCREMENT, data})
/*function createDecrementAction(data) {
    return {type:'decrement', data}
}*/
// 可精簡為下
export const createDecrementAction = data => ({type:DECREMENT, data})

/*export const createIncrementAsyncAction = (data, time) => {
    return ()=>{
        setTimeout(()=>{
            store.dispatch(createIncrementAction(data))
        }, time)
    }
}*/
// 因為在異步 action 中，store 在調用時自動就會把 dispatch() 當作參數傳入，所以可以改成
export const createIncrementAsyncAction = (data, time) => {
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(createIncrementAction(data))
        }, time)
    }
}