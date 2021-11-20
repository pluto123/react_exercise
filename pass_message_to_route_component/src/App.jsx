// 創建外殼組件 App
import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'
import Item1 from './pages/Item1'
import Item2 from './pages/Item2'

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <MyNavLink to='/item1'>Item 1</MyNavLink>
                            <MyNavLink to='/item2'>Item 2</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    <Route path='/item1' component={Item1} />
                                    <Route path='/item2' component={Item2} />
                                    <Redirect to="/item1" />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}