import React, { Component } from 'react';

class Child extends Component {

    state = {
        /*users: [
            {id: '001', name: 'tom', age: 18},
            {id: '002', name: 'jack', age: 19},
            {id: '003', name: 'steven', age: 20},
        ]*/
        users: 'bac'
    }

    render() {
        return (
            <div>
                <h2>我是 Child 組件</h2>
                {
                    this.state.users.map(user=>{
                        return <h4 key={user.id}>{user.name} --- {user.age}</h4>
                    })
                }
            </div>
        );
    }
}

export default Child;