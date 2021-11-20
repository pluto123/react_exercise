import React, { Component } from 'react';
//import qu from 'querystring'

const DeatilData = [
    {id:'01', content:'content 1'},
    {id:'02', content:'content 2'},
    {id:'03', content:'content 3'}
]
export default class Detail extends Component {
    render() {
        console.log(this.props)
        // 接收 params 參數
        // const {id, title} = this.props.match.params

        // 接收 search 參數
        // const {search} = this.props.location
        // const {id, title} = qu.parse(search.slice(1))

        // 接收 state 參數
        const {id, title} = this.props.location.state || {}

        const findResult = DeatilData.find((detailObj) => {
            return detailObj.id === id
        })
        return (
            <ul>
                <li>ID:{id}</li>
                <li>Title:{title}</li>
                <li>Content:{findResult.content}</li>
            </ul>
        );
    }
}