import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { loginUsuario } from '../../actions/usuario';
import '../../style/general.scss';
// import { required, maxLength, number, minValue, email } from "../validation/validateFormularios";
import { email, required, minLength8, maxLength15 } from "../../validation/validateFormularios";
import renderField from '../helpers/renderField';

let history = require("history").createBrowserHistory;

class LoginForm extends Component {
    onSubmit(props) {
        this.props.loginUsuario(props);
        // this.props.fetchUsuario(props, () => {
        //     history.push('/');
        // });
    }

    render() {
        const { handleSubmit, pristine, submitting } = this.props;

        return (
            <div className="container">
                <br />
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div className="form-row">
                        <label className="offset-md-2 col-2 text-right">E-mail</label>
                        <div className="col-4">
                            <Field name="email" type="email" component={renderField} className="form-control" validate={[email, required]} />
                        </div>
                    </div>
                    <br />
                    <div className="form-row">
                        <label className="offset-md-2 col-2 text-right">Senha</label>
                        <div className="col-4">
                            <Field name="senha" type="password" component={renderField} className="form-control" validate={[minLength8, maxLength15, required]} />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="offset-md-2 col-md-6 text-right">
                            <button className="btn btn-link">Esqueceu a senha?</button>
                            <button type="submit" className="btn btn-success shadow border-dark" disabled={pristine || submitting}>
                                Entrar
                            </button>
                        </div>
                    </div>
                </form >
            </div>
        );
    }
}

export default reduxForm({
    form: 'loginForm'
})(
    connect(null, { loginUsuario })(LoginForm)
);
