import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { loginCabeleireiro } from '../actions/cabeleireiro';
import '../style/general.scss';
// import { required, maxLength, number, minValue, email } from "../validation/validateFormularios";
import { email, required, minLength8, maxLength15 } from "../validation/validateFormularios";
import renderField from './helpers/renderField';

let history = require("history").createBrowserHistory;

class LoginForm extends Component {
    onSubmit(props) {
        this.props.loginCabeleireiro(props);
        // this.props.fetchCabeleireiro(props, () => {
        //     history.push('/');
        // });
    }

    render() {
        const { handleSubmit, pristine, submitting } = this.props;

        return (
            <div className="container">
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div className="offset-md-2">
                        <div className="form-row">
                            <label className="col-2">E-mail</label>
                            <div className="col-6">
                                <Field name="email" type="email" component={renderField} className="form-control" validate={[email, required]} />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="offset-md-2">
                        <div className="form-row">
                            <label className="col-2">Senha</label>
                            <div className="col-6">
                                <Field name="senha" type="password" component={renderField} className="form-control" validate={[minLength8, maxLength15, required]} />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-5">

                        </div>
                        <div className="col-7">
                            <div className="button-group">
                                <button className="btn btn-link"><a href="https://www.google.com/search?ei=JSP4XKTwOI_C5OUPsbSbqA0&q=remedio+para+mem%C3%B3ria&oq=remedio+para+mem%C3%B3ria&gs_l=psy-ab.3..0l3j0i22i30l7.2356.3460..3545...0.0..0.109.716.2j5......0....1..gws-wiz.......0i71j35i39j0i67.KLEAcbzwbw0">Esqueceu a senha?</a></button>
                                <button type="submit" className="btn btn-success shadow border-dark" disabled={pristine || submitting}>
                                    Entrar
                            </button>
                            </div>
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
    connect(null, { loginCabeleireiro })(LoginForm)
);
