// 為 Count 組件生成 action 對象
/*function createIncrementAction(data) {
    return {type:'increment', data}
}*/

import { DECREMENT, INCREMENT } from "./constant"

// 可精簡為下
export const createIncrementAction = data => ({type:INCREMENT, data})
/*function createDecrementAction(data) {
    return {type:'decrement', data}
}*/
// 可精簡為下
export const createDecrementAction = data => ({type:DECREMENT, data})