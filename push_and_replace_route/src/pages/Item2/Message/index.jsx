import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom'
import Detail from './Detail';

export default class Message extends Component {
    state = {
        messageArr: [
            {id: '01', title: 'message01'},
            {id: '02', title: 'message02'},
            {id: '03', title: 'message03'}
        ]
    }

    replaceShow = (id, title) => {
        this.props.history.replace(`/item2/message/detail`, {id, title})
    }

    pushShow = (id, title) => {
        this.props.history.push(`/item2/message/detail`, {id, title})
    }

    back = () => {
        this.props.history.goBack()
    }

    forward = () => {
        this.props.history.goForward()
    }

    go = () => {
        this.props.history.go(2)
    }

    render() {
        const {messageArr} = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((messageObj) => {
                            return (
                                <li key={messageObj.id}>
                                    {/* 向路由組件傳遞 params 參數 */}
                                    {/* <Link to={`/item2/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link> */}
                                    {/* 向路由組件傳遞 search 參數 */}
                                    {/* <Link to={`/item2/message/detail/?id=${messageObj.id}&title=${messageObj.title}`}>{messageObj.title}</Link> */}
                                    {/* 向路由組件傳遞 state 參數 */}
                                    <Link to={{pathname: '/item2/message/detail', state:{id:messageObj.id,title:messageObj.title}}}>{messageObj.title}</Link>
                                    &nbsp;<button onClick={()=>this.pushShow(messageObj.id, messageObj.title)}>push 查看消息</button>
                                    &nbsp;<button onClick={()=>this.replaceShow(messageObj.id, messageObj.title)}>replace 查看消息</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                {/* 聲明接收 params 參數 */}
                {/* <Route path='/item2/message/detail/:id/:title' component={Detail} /> */}
                {/* 無需聲明接收 search 參數 */}
                {/* <Route path='/item2/message/detail' component={Detail} /> */}
                {/* 無需聲明接收 state 參數 */}
                <Route path='/item2/message/detail' component={Detail} />

                <button onClick={this.back}>Back</button>&nbsp;
                <button onClick={this.forward}>Forward</button>&nbsp;
                <button onClick={this.go}>Go</button>
            </div>
        );
    }
}