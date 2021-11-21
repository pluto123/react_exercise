import React, { Component } from 'react';
import store from '../../redux/store';
import {createIncrementAction, createDecrementAction} from '../../redux/count_action'

export default class Count extends Component {
    

/*    componentDidMount() {
        // 檢測 redux 中狀態變化，如果有變化則調用 render
        store.subscribe(()=>{
            this.setState({})
        })
    }*/

    increment = () => {
        const {value} = this.selectNumber
        // store 只負責狀態更新，不負責頁面更新
        store.dispatch(createIncrementAction(value*1))
    }
    
    descrement = () => {
        const {value} = this.selectNumber
        store.dispatch(createDecrementAction(value*1))
    }
    incrementIfOdd = () => {
        const {value} = this.selectNumber
        const count = store.getState()
        if (count % 2 !== 0) {
            store.dispatch(createIncrementAction(value*1))
        }
    }
    incrementAsync = () => {
        const {value} = this.selectNumber
        setTimeout(()=>{
            store.dispatch(createIncrementAction(value*1))
        }, 1000)
    }

    render() {
        return (
            <div>
                <h1>當前計算結果 : {store.getState()}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.descrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>當前計算結果為奇數時相加</button>&nbsp;
                <button onClick={this.incrementAsync}>異步相加</button>&nbsp;
            </div>
        );
    }
}
