import React, { Component } from 'react';
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

class App extends Component {
    state = {
        todos: [
            {id: '1', name: 'eat', done: true},
            {id: '2', name: 'sleep', done: true},
            {id: '3', name: 'play', done: false}
        ]
    }

    addToDo = (toDoObj)=>{
        // 獲取原數據
        const {todos} = this.state
        // 在原數據之前添加一筆數據
        const newToDos = [toDoObj, ...todos]
        // 更新狀態
        this.setState({todos:newToDos})
    }

    // 用來更新一個 todo 對象
    updateToDo = (id, done) => {
        const {todos} = this.state
        const newTodos = todos.map((todoObj)=>{
            if(todoObj.id === id) {
                return {...todoObj, done}
            }
            else {
                return todoObj
            }
            /*if(todoObj.id === id) {
                todoObj.done = done
            }
            return todoObj*/
        })
        this.setState({todos: newTodos})
    }

    // 刪除一個 todo 對象
    deleteToDo = (id)=>{
        
        const {todos} = this.state
        const newToDos = todos.filter((todoObj)=>{
            return todoObj.id !== id
        })
        this.setState({todos:newToDos})
    }

    //將所有的 task 打勾/不打勾
    checkAllToDo = (done) => {
        const {todos} = this.state
        const newToDos = todos.map((todoObj)=>{ 
            //return {...todoObj, done: done}
            return {...todoObj, done}
        })
        this.setState({todos:newToDos})
    }

    clearAllDone = ()=>{
        const {todos} = this.state
        const newToDos = todos.filter((todo)=>{
            return !todo.done
        })
        this.setState({todos: newToDos})
    }

    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addToDo={this.addToDo}/>
                    <List todos={todos} updateToDo={this.updateToDo} deleteToDo={this.deleteToDo}/>
                    <Footer todos={todos} checkAllToDo={this.checkAllToDo} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        );
    }
}

export default App;