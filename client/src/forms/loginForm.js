import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import InputField from "../components/inputField";
import { fetchCabeleireiro } from '../actions/cabeleireiro';
import '../style/general.scss';
import { withRouter } from "react-router-dom";

let history = require("history").createBrowserHistory;

class LoginForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email : '',
            senha: ''
        };
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }


    onSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3001/cabeleireiros/autenticar', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    this.props.history.push('/Home');
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
                alert('Erro ao autenticar. Por favor tente novamente.');
            });
    }

    render() {
        const { pristine, submitting } = this.props;

        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <InputField
                        name="email" type="email" value={this.state.email}  onChange={this.handleInputChange}
                        label="E-mail" labelClasses="col-4" inputClasses="col-8" formGroupClasses="form-row" />
                    <InputField name="senha" type="password" value={this.state.senha} onChange={this.handleInputChange}
                        label="Senha" labelClasses="col-4" inputClasses="col-8" formGroupClasses="form-row" />
                    <br />
                    <div className="button-group">
                        <button className="btn btn-link">Esqueceu a senha?</button>
                        <button type="button" className="btn btn-success shadow border-dark" disabled={pristine || submitting}>
                            Entrar
                            </button>
                    </div>
                </form >
            </div>
        );
    }
}

export default reduxForm({
    form: 'loginForm'
})(
    connect(null, { fetchCabeleireiro })(LoginForm)
);
