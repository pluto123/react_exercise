// 創建外殼組件 App
import {Component, Fragment} from 'react'
import Parent from './Parent'

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Parent />
            </Fragment>
        )
    }
}