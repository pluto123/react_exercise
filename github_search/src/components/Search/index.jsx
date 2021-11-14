import React, { Component } from 'react';
import axios from 'axios'

export default class Search extends Component {
    search = () => {
        // 獲取用戶的輸入
        //const {value} = this.keyWordElement
        //const {keyWordElement:{value}} = this  // 連續解構賦值
        const {keyWordElement:{value:keyWord}} = this  // 連續解構賦值並重命名為 keyWord
        console.log(keyWord)
        // 發送請求前更新 App 狀態
        this.props.updateAppState({isFirst:false, isLoading:true})
        // 發送網路請求
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            response => {
                console.log('成功', response.data)
                //this.props.saveUsers(response.data.items)
                // 請求成功後更新 App 狀態
                this.props.updateAppState({isLoading:false, users:response.data.items})
            },
            error => {
                console.log('失敗', error)
                // 請求成功後更新 App 狀態
                this.props.updateAppState({isLoading:false, err:error.message})
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