import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

class index extends Component {

    // 對接收的 props 進行類型與必要性的限制
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateToDo: PropTypes.func.isRequired,
        deleteToDo: PropTypes.func.isRequired
    }
    

    render() {
        const {todos, updateToDo, deleteToDo} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map((todo)=>{
                        return <Item key={todo.id} {...todo} updateToDo={updateToDo} deleteToDo={deleteToDo}/>
                    })
                }
            </ul>
        );
    }
}

export default index;