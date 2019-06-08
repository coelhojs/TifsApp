import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { loginUsuario } from '../../actions/usuario';
// import { required, maxLength, number, minValue, email } from "../validation/validateFormularios";
import { email, required, minLength8, maxLength15 } from "../../validation/validateFormularios";
import renderField from '../helpers/renderField';

let history = require("history").createBrowserHistory;

class LoginForm extends Component {
    onSubmit(props) {
        this.props.loginUsuario(props);
    }

    render() {
        const { handleSubmit, pristine, submitting } = this.props;

        return (
            <form className="container" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="form-header">
                    <h3>Acesse sua conta</h3>
                </div>
                <div className="form-body">
                    <div className="form-row">
                        <label className="col-md-3 text-right">E-mail</label>
                        <div className="col-md-7">
                            <Field name="email" type="email" component={renderField} className="form-control" validate={[email, required]} />
                        </div>
                    </div>
                    <br />
                    <div className="form-row">
                        <label className="col-md-3 text-right">Senha</label>
                        <div className="col-md-7">
                            <Field name="senha" type="password" component={renderField} className="form-control" validate={[minLength8, maxLength15, required]} />
                        </div>
                    </div>
                </div>
                <div className="form-footer row">
                    <div className="offset-md-2 col-md-6 text-right">
                        <button className="btn btn-link btn-disabled">Esqueceu a senha?</button>
                        <button type="submit" className="btn btn-success shadow border-dark" disabled={pristine || submitting}>
                            Entrar
                            </button>
                    </div>
                </div>
            </form >
        );
    }
}

export default reduxForm({
    form: 'loginForm'
})(
    connect(null, { loginUsuario })(LoginForm)
);
