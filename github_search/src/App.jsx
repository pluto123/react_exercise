import {Component} from "react"
import List from "./components/List"
import Search from "./components/Search"

export default class App extends Component{
  state = {
    users:[],  // 儲存查詢出的使用者資訊
    isFirst: true,  // 是否第一次進入
    isLoading: false,  // 識別是否處於加載中
    err: ''  // 紀錄請求錯誤訊息
  }

/*  saveUsers = (users) => {
    this.setState({users})
  }*/

  updateAppState = (stateObj)=>{
    this.setState(stateObj)
  }

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state}/>
      </div>
    )
  }
}