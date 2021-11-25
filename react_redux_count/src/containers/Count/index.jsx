import React, { Component } from 'react';
// 引入 connect 用於連接 UI 組件與 redux
import {connect} from 'react-redux'
import { 
    increment, 
    decrement, 
    incrementAsync 
} from '../../redux/actions/count'

class Count extends Component {

    increment = () => {
        //console.log(this.props)
        const {value} = this.selectNumber  // 由 <input> 取得的數值
        this.props.increment(value*1)  // 透過 props 操作 reducer，即建立 actio 後透過 dispatch() 發送處理
    }
    
    descrement = () => {
        const {value} = this.selectNumber
        this.props.decrement(value*1)
    }
    incrementIfOdd = () => {
        const {value} = this.selectNumber
        const {count} = this.props  // 由 props 解構取值
        
        if (count % 2 !== 0) {
            this.props.increment(value*1)
        }
    }
    incrementAsync = () => {
        const {value} = this.selectNumber
        this.props.incrementAsync(value*1, 1000)
    }

    render() {
        return (
            <div>
                <h2>我是 Count 組件</h2>
                <h4>當前計算結果 : {this.props.count}, 下方組件總人數為:{this.props.persons.length}</h4>
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

// 創建並曝露一個 Count 的容器組件
export default connect(
    // connect() 第一個參數用來映射狀態，返回值是一個對象，即會透過 UI 組件的 props 傳遞狀態
    state => ({count:state.count, persons:state.persons}),
    // 第二個參數用來映射操作狀態的方法，返回值也是一個對象，即會透過 UI 組件的 props 傳遞狀態
    {
        increment,
        decrement,
        incrementAsync
    }
)(Count)