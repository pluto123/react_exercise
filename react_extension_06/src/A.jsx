import React, {PureComponent} from "react"
import './A.css'

export default class A extends PureComponent {

    state = {carName: 'Honda'}

    changeCar = () => {
        this.setState({})
    }
/*
    sahouldComponentUpdate(nextProps, nextState) {
        console.log('Current', this.props, this.state)  // 目前值
        console.log('Next', nextProps, nextState)       // 改變值
        if (this.state.carName === nextState.carName) {
            return false
        }
        return true
    }
*/    
    render() {
        console.log("render --- A")
        const {carName} = this.state
        return (
            <div className='parent'>
                <h3>我是 A 組件</h3>
                <h4>我的車: {carName}</h4>
                <button onClick={this.changeCar}>Change</button>
                <B carName={carName}/>
            </div>
        )
    }
}

class B extends PureComponent {
 /*   
    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.carName === nextProps.carName) {
            return false
        }
        return true
    }
*/
    render() {
        console.log("render --- B")
        return (
            <div className='child'>
                <h3>我是 B 組件</h3>
                <h4>接收到的車: {this.props.carName}</h4>
            </div>
        )
    }
}