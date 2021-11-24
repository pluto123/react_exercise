import { DECREMENT, INCREMENT } from "../constant"

// 用於創建一個為 Count 組件服務的 reducer
const initState = 0
export default function countReducer(preState=initState, action) {
    console.log(action)
    const {type, data} = action
    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState
    }
}