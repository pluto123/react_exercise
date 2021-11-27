// 創建外殼組件 App
import {Component, lazy, Suspense} from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'
//import Item1 from './pages/Item1'
//import Item2 from './pages/Item2'
import Loading from './components/Loading'

const Item1 = lazy(()=> import('./pages/Item1'))
const Item2 = lazy(()=> import('./pages/Item2'))

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
                                <Suspense fallback={<Loading />}>
                                    <Switch>
                                        <Route path='/item1' component={Item1} />
                                        <Route path='/item2' component={Item2} />
                                    </Switch>
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}