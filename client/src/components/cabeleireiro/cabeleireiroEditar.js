import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import renderField from '../helpers/renderField';
import { editCabeleireiro, fetchCabeleireiro } from '../../actions/cabeleireiro';

let history = require("history").createBrowserHistory;

class CabeleireiroEditar extends Component {
    onSubmit(formValues) {
        this.props.onSubmit((formValues), () => {
            history.push('/');
        });
    }
    // userDelete() {
    //     this.props.deleteCabeleireiro(this.props.match.params.id);
    // }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <form className="container" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="text-center"><h1>Editar perfil</h1></div>
                <hr />
                <Field name="nome" label="Nome" component={renderField}
                    type="text"/>
                <Field name="sobrenome" label="Sobrenome" component={renderField}
                    type="text"/>
                <Field name="cnpj" label="CNPJ" component={renderField}
                    type="number" />
                <Field name="telefone" label="Telefone" component={renderField}
                    type="tel" />
                <Field name="email" label="E-mail" component={renderField}
                    type="email"/>
                <Field name="dataNascimento" label="Data de nascimento" component={renderField}
                    type="date"/>
                <Field name="senha" label="Senha" component={renderField}
                    type="password"/>
                <Field name="repetirSenha" label="Repita a Senha" component={renderField}
                    type="password" />
                <br />
                <div className="button-group d-flex justify-content-around">
                    <button type="button" className="btn btn-success"  disabled={pristine || submitting}>
                        Cadastrar
                        </button>
                    <button type="button" className="btn btn-danger" disabled={pristine || submitting}
                        onClick={reset}>
                        Cancelar
                        </button>
                </div>
                <br />
                {/* <button type="button" class="btn btn-danger" onclick={this.userDelete()}>Danger</button> */}
            </form >
        );
    }
}

export default reduxForm({
    form: 'cabeleireiroEditar'
})(
    connect(null, { fetchCabeleireiro, editCabeleireiro })(CabeleireiroEditar)
);