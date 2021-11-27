/*
import React, { Component } from 'react';
import ReactDOM from 'react-dom'

export default class Count extends Component {
    state = {count:0}

    myRef = React.createRef()

    add = () => {
        const {count} = this.state
        this.setState({count:count+1})
    }

    unmount = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    show = () => {
        alert(this.myRef.current.value)
    }

    componentDidMount() {
        this.timer = setInterval(()=>{
            this.setState(state=>({count:state.count+1}))
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        const {count} = this.state
        return (
            <div>
                <h2>Count: {count}</h2>
                <button onClick={this.add}>Add</button>
                <button onClick={this.unmount}>Unmonut</button>
                <input type="text" ref={this.myRef} />
                <button onClick={this.show}>Show</button>
            </div>
        );
    }
}
*/

import React from 'react';
import ReactDOM from 'react-dom'

function Count() {

    // React.setState(初始狀態) 並返回兩個元素的數組
    // 第一個元素是當前狀態
    // 第二個元素是更新狀態的函數
    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState('tom')
    const myRef = React.useRef()

    // React.useEffect(發生變化時的回調方法, 受監測的變數數組)
    // react 會監測第二個參數中的變數，如果有改變則調用第一個參數的函數
    // 若不寫第二個參數則表示全部監測，若寫空數組 [] 則表示全部不監測
    React.useEffect(()=>{
        let timer = setInterval(()=>{
            setCount(count=>count+1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    function add() {
        // 更新狀態的函數有兩種傳參
        // 第一種傳非函數數值，直接指定新狀態
        //setCount(count+1)
        // 第二種傳函數
        setCount(count => count+1)
    }

    function changeName() {
        setName('steven')
    }

    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    function show() {
        alert(myRef.current.value)
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={add}>Add</button>
            <h2>Nmae: {name}</h2>
            <button onClick={changeName}>Change</button>
            <button onClick={unmount}>Unmount</button>
            <input type="text" ref={myRef} />
            <button onClick={show}>Show</button>
        </div>
    )
}

export default Count
