import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createCabeleireiro } from '../actions/cabeleireiro';
import '../style/general.scss';

const validador = require('../validate/validate');
let history = require("history").createBrowserHistory;

class CabeleireiroCadastro extends Component {


    onSubmit(props) {
        // if (!validador.validarCpf(props.nome)) { alert("Nome Invalido!"); return; }
        // if (!validador.validarCnpj(props.cnpj)) { alert("CNPJ Invalido!"); return; }
        // if (!validador.validarCpf(props.cpf)) { alert("CPF Invalido!"); return; }

        this.props.createCabeleireiro(props);
    }

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <form className="container" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="text-center"><h1>Cadastro de Cabeleireiro</h1></div>
                <hr />
                <label htmlFor="">Nome</label>
                <Field className="form-control" name="nome" component="input"
                    type="text" />
                <label htmlFor="">CNPJ</label>
                <Field className="form-control" name="cnpj" component="input"
                    type="number" />
                <label htmlFor="">Telefone</label>
                <Field className="form-control" name="telefone" component="input"
                    type="tel" />
                <label htmlFor="">E-mail</label>
                <Field className="form-control" name="email" component="input"
                    type="email" />
                <label htmlFor="">Data de nascimento</label>
                <Field className="form-control" name="dataNascimento" component="input"
                    type="date" />
                <label htmlFor="">Senha</label>
                <Field className="form-control" name="senha" component="input"
                    type="password" />
                <br />
                <div className="button-group d-flex justify-content-around">
                    <button type="submit" className="btn btn-success" disabled={pristine || submitting} >
                        Cadastrar
                        </button>
                    <button type="button" className="btn btn-danger" disabled={pristine || submitting}
                        onClick={reset}>
                        Cancelar
                        </button>
                </div>
                <br />
            </form >
        );
    }
}

export default reduxForm({
    form: 'cabeleireiroCadastro'
})(
    connect(null, { createCabeleireiro })(CabeleireiroCadastro)
);