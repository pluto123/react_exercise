import {Component} from 'react'
import {Button, DatePicker} from 'antd'
import {HomeOutlined} from '@ant-design/icons'
//import 'antd/dist/antd.css'

const { RangePicker } = DatePicker;
export default class App extends Component {
    render() {
        return (
            <div>
                <Button type="primary">Primary Button</Button>
                <HomeOutlined />
                <RangePicker />
            </div>
        )
    }
}