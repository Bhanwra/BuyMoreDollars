import { Component } from "react";

export default class Button extends Component {

    constructor(props) {
        super(props)
        
        this.classes = ( props.className ) ? props.className : ''
    }

    render() {
        return(
            <button className={`btn ${ this.classes }`} type={ (this.props.type) ? this.props.type : 'button' }>{ this.props.label }</button>
        )
    }

}