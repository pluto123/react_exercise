// 創建外殼組件 App
import {Component} from 'react'
import Hello from './components/Hello'

export default class App extends Component {
    render() {
        return (
            <div a={1}>
                <Hello/>
            </div>
        )
    }
}