import React, { Component } from 'react';

const DeatilData = [
    {id:'01', content:'content 1'},
    {id:'02', content:'content 2'},
    {id:'03', content:'content 3'}
]
export default class Detail extends Component {
    render() {
        const {id, title} = this.props.match.params
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