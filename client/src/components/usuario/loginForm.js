import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { loginUsuario } from '../../actions/usuario';
// import { required, maxLength, number, minValue, email } from "../validation/validateFormularios";
import { email } from "../../validation/validateFormularios";
import renderField from '../helpers/renderField';

//let history = require("history").createBrowserHistory;

class LoginForm extends Component {
    onSubmit(props) {
        this.props.loginUsuario(props);
    }

    render() {
        const { handleSubmit, pristine, submitting } = this.props;

        return (
            <form className="login-form container-fluid no-gutters" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="form-header text-center">
                    <h4>Acesse sua conta</h4>
                </div>
                <div className="form-body offset-md-3 col-md-6">

                    <label className="">E-mail</label>
                    <div className="">
                        <Field name="email" type="email" className="renderField" component={renderField} validate={[email]} />
                    </div>

                    <br />

                    <label className="">Senha</label>
                    <div className="">
                        <Field name="senha" type="password" className="renderField" component={renderField} />
                    </div>
                </div>
                <div className="form-footer text-center">
                    <div className="col-md-12 text-center">
                        {/* <button className="btn btn-link btn-disabled">Esqueceu a senha?</button> */}
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
