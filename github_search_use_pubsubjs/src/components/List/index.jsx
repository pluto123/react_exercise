import React, { Component } from 'react';
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
    state = {
        users:[],  // 儲存查詢出的使用者資訊
        isFirst: true,  // 是否第一次進入
        isLoading: false,  // 識別是否處於加載中
        err: ''  // 紀錄請求錯誤訊息
    }

    componentDidMount() {
        // 之後要利用此 token 解除訂閱
        this.token = PubSub.subscribe('github_search', (msg, stateObj)=>{
            this.setState(stateObj)
        })
    }

    componentWillUnmount() {
        // 當元件卸載後就取消訂閱
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {users, isFirst, isLoading, err} = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h2>Enter user name to search</h2> :
                    isLoading ? <h2>Loading...</h2> :
                    err ? <h2 style={{color:'red'}}>{err}</h2> :
                    users.map((userObj) => {
                        return (
                            <div key={userObj.id} className="card">
                                <a rel="noreferrer" href={userObj.html_url} target="_blank">
                                    <img alt="head_portrait" src={userObj.avatar_url} style={{width: '100px'}}/>
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
            }
            </div>
        );
    }
}