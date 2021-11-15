import React, { Component } from 'react';
import PubSub from 'pubsub-js'

export default class Search extends Component {
    search = async() => {
        // 獲取用戶的輸入
        const {keyWordElement:{value:keyWord}} = this  // 連續解構賦值並重命名為 keyWord
        // 發送請求前更新 App 狀態
        PubSub.publish('github_search', {isFirst:false, isLoading:true})
        // 發送網路請求 (未優化)
/*        fetch(`https://api.github.com/search/users?q=${keyWord}`).then(
            response => {
                console.log('聯繫服務器成功')
                return response.json()
            },
            error => {
                console.log('聯繫服務器失敗', error)
                // 必須中斷 Promise 鏈，否則會傳回 undefine
                return new Promise(()=>{})
            }
        ).then(
            response => {
                console.log('獲取數據成功', response)
            },
            error => {
                console.log('獲取數據失敗', error)
            }
        )
*/
        // 發送網路請求 (優化，統一處理錯誤)
/*        fetch(`https://api.github.com/search/users?q=${keyWord}`).then(
            response => {
                console.log('聯繫服務器成功')
                return response.json()
            }
        ).then(
            response => {
                console.log('獲取數據成功', response)
            }
        ).catch(
            error => {
                console.log('請求失敗', error)
            }
        )*/

        // 發送網路請求 (最佳版本)
        try {
            const response = await fetch(`https://api.github.com/search/users?q=${keyWord}`)
            const data = await response.json()
            // 請求成功後更新 App 狀態
            PubSub.publish('github_search', {isLoading:false, users:data.items})
        } catch (error) {
            console.log('請求出錯', error)
            // 請求失敗後更新 App 狀態
            PubSub.publish('github_search', {isLoading:false, err:error.message})
        }
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