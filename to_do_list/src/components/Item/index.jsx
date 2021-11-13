import React, { Component } from 'react';
import './index.css'

class index extends Component {

    state = {mouse:false}

    handleMouse = (flag)=>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }

    handleCheck = (id)=>{
        return (event)=>{
            this.props.updateToDo(id, event.target.checked)
         }
    }

    handleDelete = (id)=>{
        return ()=>{
            // 注意這邊不可以只寫 confirm()
            if(window.confirm("確定篩除嗎?")) {
                this.props.deleteToDo(id)
            }
        }
    }

    render() {
        const {id, name, done} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor: mouse?'#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={this.handleDelete(id)} className="btn btn-danger" style={{display: mouse?'block':'none'}}>Delete</button>
            </li>
        );
    }
}

export default index;