import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'

class Person extends Component {

    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(), name, age}
        this.props.addPerson(personObj)
    }

    render() {
        return (
            <div>
                <h2>我是 Person 組件, 上方組件和為: {this.props.count}</h2>
                <input ref={c=>this.nameNode = c} type="text" placeholder='輸入名字'/>
                <input ref={c=>this.ageNode = c} type="text" placeholder='輸入年齡'/> 
                <button onClick={this.addPerson}>添加</button>
                {
                    this.props.persons.map((personObj) => {
                        return <li key={personObj.id}>{personObj.name}---{personObj.age}</li>
                    })
                }
            </div>
        );
    }
}

export default connect(
    state=>({persons:state.persons, count:state.count}),
    {addPerson:createAddPersonAction}
)(Person)