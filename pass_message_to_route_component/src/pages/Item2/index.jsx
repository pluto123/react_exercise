import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink' 
import News from './News'
import Message from './Message';

export default class Item2 extends Component {
    render() {
        return (
            <div>
                <h2>Item2 內容</h2>
                <ul className="nav nav-tabs">
                  <li>
                    <MyNavLink to='/item2/news'>News</MyNavLink>
                  </li>
                  <li>
                    <MyNavLink to='/item2/message'>Message</MyNavLink>
                  </li>
                </ul>
                <Switch>
                    <Route path='/item2/news' component={News} />
                    <Route path='/item2/message' component={Message} />
                    <Redirect to='/item2/news' />
                </Switch>
            </div>
        );
    }
}