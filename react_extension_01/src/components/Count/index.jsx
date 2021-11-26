import React, { Component } from 'react';

export default class Count extends Component {
    state = {count:0}

    add = () => {
        const {count} = this.state
        this.setState({count:count+1}, () => {
            // 因為 setState() 是異步更新，所以此函數會在更新完後才進行回調，所以要在這邊才可以看到更新後的值
            console.log("setState(): ", this.state.count)
        })
        // 因為 setState() 屬於異步更新，所以緊接在後查看並不會取得更新值
        console.log("add(): ", this.state.count)
    }

    minus = () => {
        this.setState((state, props) => {
            return {count:state.count-1}
        })
    }

    render() {
        const {count} = this.state
        return (
            <div>
                <h2>Count: {count}</h2>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }
}