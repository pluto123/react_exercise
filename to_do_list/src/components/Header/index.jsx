import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

class index extends Component {

    // 對接收的 props 進行類型與必要性的限制
    static propTypes = {
        addToDo: PropTypes.func.isRequired
    }

    handleKeyUp = (event)=>{
        const {keyCode, target} = event
        if (keyCode !== 13)
            return
        if (target.value.trim() === '') {
            alert('輸入不可為空')
            return
        }
        // 準備好一個 toDoObj
        const toDoObj = {id:nanoid(), name:target.value, done:false}
        // 將 toDoObj 傳遞給 App 組件
        this.props.addToDo(toDoObj)
        // 清空輸入
        target.value = ''
    }
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="input task name"/>
            </div>
        );
    }
}

export default index;