import { Component } from "react";

export default class Row extends Component {

    render() {
        return(
            <div className="row">
                {this.props.children}
            </div>
        )
    }

}