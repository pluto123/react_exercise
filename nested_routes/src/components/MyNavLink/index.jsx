import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {
    render() {
        return (
            <NavLink activeClassName='my_active' className="list-group-item" {...this.props}></NavLink>
        );
    }
}