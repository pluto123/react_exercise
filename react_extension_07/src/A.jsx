import React, {Component} from "react"
import './A.css'

export default class A extends Component {    
    render() {
        return (
            <div className='parent'>
                <h3>我是 A 組件</h3>
                <B render={(name)=><D name={name}/>} />
            </div>
        )
    }
}

class B extends Component {
    state = {name: 'tom'} 
    render() {
        return (
            <div className='child'>
                <h3>我是 B 組件</h3>
                {this.props.render(this.state.name)}
            </div>
        )
    }
}

class C extends Component {
    render() {
        return (
            <div className='grand'>
                <h3>我是 C 組件, {this.props.name}</h3>
            </div>
        )
    }
}

class D extends Component {
    render() {
        return (
            <div className='grand'>
                <h3>我是 D 組件, {this.props.name}</h3>
            </div>
        )
    }
}