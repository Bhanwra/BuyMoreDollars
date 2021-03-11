import { Component } from "react";

export default class Input extends Component {

    constructor(props) {
        super(props)

        this.state = {
            value: '',
            isValid: true
        }


    }
    isInvalid() {
        this.setState({
            isValid: false
        })
    }; isValid() {
        this.setState({
            isValid: true
        })
    }

    check() {
        let pattern = null;
        switch (this.props.type) {
            case "phone":
                pattern = /^[0-9]{10}$/;
                break;
            case "name":
                pattern = /^[a-z A-z-.]+$/;
                break;
            case "address":
                pattern = /^[a-zA-Z0-9 ,.]+$/;
                break;
            case "email":
                pattern = pattern = /^[A-Za-z]{1}[0-9]{1}[A-Za-z]{1}[ ]?[0-9]{1}[A-Za-z]{1}[0-9]{1}$/;
                break;
            case "zip":
                pattern = /^[a-z0-9.]+[@]{1}[a-z0-9]+[.]{1}[a-z]{2,}$/;
                break;
            case "date":
                pattern = /^[0-9]{4}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/;
                break;
            default:
                console.log("No type available");
                break;

        }

        if ((this.value !== "") && !pattern.test(this.value)) {
            this.isInvalid();
        } else {
            this.isValid();
        }

    }
    updateValue(evt) {
        this.setState({ value: evt.target.value });
        this.value = evt.target.value;
        this.check();
    }

    render() {

        return (
            <div className="input-group">
                <label>{this.props.label}</label>
                <input id={this.props.id} value={this.state.value} placeholder={this.props.placeholder} onChange={evt => this.updateValue(evt)}
                    className={`is-${(this.state.isValid) ? 'valid' : 'invalid'}`} />
                <p className="error" id={`${this.props.id}Error`}>{this.props.errorMessage}</p>
            </div>
        )
    }

}