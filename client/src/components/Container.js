import { Component } from "react";

export default class Container extends Component {

    constructor(props) {
        super(props)
        
        this.classes = ( props.className ) ? props.className : ''
    }

    render() {
        return(
            <div className={`padding-3 ${ this.classes }`}>
                {this.props.children}
            </div>
        )
    }

}