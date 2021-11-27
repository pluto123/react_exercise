// 創建外殼組件 App
import {Component} from 'react'
import A from './A.jsx'

export default class App extends Component {
    render() {
        return (
            <div>
                <A/>
            </div>
        )
    }
}