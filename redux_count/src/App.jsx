// 創建外殼組件 App
import {Component} from 'react'
import Count from './components/Count'

export default class App extends Component {
    render() {
        return (
            <div>
                <Count/>
            </div>
        )
    }
}