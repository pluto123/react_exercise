import React, {Component} from "react"
import './A.css'

// 創建 context 對象
const MyContext = React.createContext()
const {Provider, Consumer} = MyContext
export default class A extends Component {

    state = {username: 'tom', age:18}
    
    render() {
        const {username, age} = this.state
        return (
            <div className='parent'>
                <h3>我是 A 組件</h3>
                <h4>我的用戶名是: {username}</h4>
                {/* 設定後代組件都收得到 context */}
                <Provider value={{username, age}}>
                    <B />
                </Provider>
            </div>
        )
    }
}

class B extends Component {
    
    render() {
        return (
            <div className='child'>
                <h3>我是 B 組件</h3>
                <C />
            </div>
        )
    }
}

/*
class C extends Component {
    // 聲明接收 context
    static contextType = MyContext

    render() {
        const {username, age} = this.context
        return (
            <div className='grand'>
                <h3>我是 C 組件</h3>
                <h4>從 A 組件接收到的用戶名是: {username}, age:{age}</h4>
            </div>
        )
    }
}
*/

function C() {
    return (
        <div className='grand'>
            <h3>我是 C 組件</h3>
            <h4>從 A 組件接收到的用戶名是: 
                <Consumer>
                    {
                        value => {
                            return `${value.username}, age: ${value.age}`
                        }
                    }
                </Consumer>
            </h4>
        </div>
    )
}