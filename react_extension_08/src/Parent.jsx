import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {

    state = {hasError: ''}

    static getDerivedStateFromError(error) {
        console.log(error)
        return {hasError:error}
    }

    componentDidCatch() {
        console.log('渲染組件時出錯')
        // 一般會在此處進行反饋給服務器進行錯誤統計後，用於通知編碼人員進行處理
    }

    render() {
        return (
            <div>
                <h2>我是 Parent 組件</h2>
                {this.state.hasError ? <h2>當前網路不穩定. 稍後再試</h2>:<Child />}
            </div>
        );
    }
}

export default Parent;