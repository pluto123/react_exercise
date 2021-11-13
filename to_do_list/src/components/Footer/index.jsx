import React, { Component } from 'react';
import './index.css'

class index extends Component {

    handleCheckAll = (event) => {
        this.props.checkAllToDo(event.target.checked)
    }

    handleClearAllDone = ()=>{
        this.props.clearAllDone()
    }

    render() {
        const {todos} = this.props
        // 以完成的任務數
        const doneCount = todos.reduce((pre, todo)=>{
            return pre + (todo.done?1:0)
        }, 0)
        // 任務總數
        const total = todos.length
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0?true:false}/>
                </label>
                <span>
                    <span>Done {doneCount}</span> / Total {total}
                </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">clear done task</button>
            </div>
        );
    }
}

export default index;