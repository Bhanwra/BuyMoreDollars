import { Component } from "react";

export default class Input extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isValid: true
        }
    }

    isInvalid() {
        this.setState({
            isValid: false
        })
    }

    render() {


        setTimeout(() => {
            console.log("Setting invalid")
            this.isInvalid()
        }, 1000)

        return(
            <div className="input-group">
                <label>{ this.props.label }</label>
                <input id={ this.props.id } placeholder={ this.props.placeholder } className={`is-${ (this.state.isValid ) ? 'valid' : 'invalid' }`} />
                <p className="error" id={`${this.props.id}Error`}>{ this.props.errorMessage }</p>
            </div>
        )
    }

}