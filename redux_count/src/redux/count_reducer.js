// 用於創建一個為 Count 組件服務的 reducer
const initState = 0
export default function countReducer(preState=initState, action) {
    const {type, data} = action
    switch (type) {
        case 'increment':
            return preState + data
        case 'decrement':
            return preState - data
        default:
            return preState
    }
}