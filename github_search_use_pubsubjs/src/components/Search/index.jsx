import React, { Component } from 'react';
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {
    search = () => {
        // 獲取用戶的輸入
        const {keyWordElement:{value:keyWord}} = this  // 連續解構賦值並重命名為 keyWord
        // 發送請求前更新 App 狀態
        PubSub.publish('github_search', {isFirst:false, isLoading:true})
        // 發送網路請求
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            response => {
                // 請求成功後更新 App 狀態
                PubSub.publish('github_search', {isLoading:false, users:response.data.items})
            },
            error => {
                // 請求失敗後更新 App 狀態
                PubSub.publish('github_search', {isLoading:false, err:error.message})
            }
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        );
    }
}