// 創建外殼組件 App
import {Component} from 'react'
//import Count from './components/Count'
import Count from './containers/Count'
import Person from './containers/Person'
//import store from './redux/store'

export default class App extends Component {
    render() {
        return (
            <div>
                <Count/>
                <Person />
            </div>
        )
    }
}