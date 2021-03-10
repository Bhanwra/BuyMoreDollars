import { Component } from "react";

export default class Column extends Component {

    constructor(props) {
        super(props)
        this.classes = ( props.width && Number.isInteger(Number.parseInt(props.width)) ) ? `col-${props.width}` : ''

        this.classes += ( props.className ) ? ` ${props.className}` : ''
    }

    render() {
        return(
            <div className={`padding-0 ${this.classes}`}>
                {this.props.children}
            </div>
        )
    }

}