import {Component, Fragment} from "react"

export default class Hello extends Component {
    render() {
        return <Fragment key={1}>
            <input type="text" />
            <input type="text" />
        </Fragment>
    }
}   