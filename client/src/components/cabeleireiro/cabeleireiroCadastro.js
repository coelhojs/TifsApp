import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createCabeleireiro } from '../../actions/cabeleireiro';
import renderField from '../helpers/renderField';
import { email, required, minLength8, maxLength15, length14, letters, number, tooYoung } from "../../validation/validateFormularios";
import normalizePhone from "../../validation/normalizePhone";

// const validador = require('../validate/validate');
// let history = require("history").createBrowserHistory;

class CabeleireiroCadastro extends Component {
  onSubmit(props) {
    this.props.createCabeleireiro(props);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form className="container" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className="text-center">
          <h1>Cadastro de Cabeleireiro</h1>
        </div>
        <hr />
        <div className="row">
          <div className="offset-md-1 col-md-5">
            <label>Nome completo</label>
            <Field className="form-control"
              name="nome"
              component={renderField}
              type="text"
              validate={[minLength8, letters, required]} />

            <label>CNPJ</label>
            <Field className="form-control"
              name="cnpj"
              component={renderField}
              validate={[number, length14]}
              type="text"
            />
            <label>Telefone</label>
            <Field className="form-control"
              name="telefone"
              component={renderField}
              type="tel"
              normalize={normalizePhone}
              validate={required}
            />
            <label>E-mail</label>
            <Field className="form-control"
              name="email"
              component={renderField}
              type="email"
              validate={[email, required]}
            />
            <label>Data de nascimento</label>
            <Field className="form-control"
              name="dataNascimento"
              component={renderField}
              type="date"
              validate={[tooYoung, required]}
            />
            <label>Senha</label>
            <Field className="form-control"
              name="senha"
              component={renderField}
              type="password"
              validate={[minLength8, maxLength15, required]}
            />
            <label>Repetir senha</label>
            <Field className="form-control"
              name="repetirSenha"
              component={renderField}
              type="password"
              validate={[minLength8, maxLength15, required]}
            />
            <br />
          </div>
          <div className="col-md-6 text-center">
            <img src="/img/cadastroImg.svg" alt="" style={{ marginTop: '4rem' }} />
          </div>
          <div className="offset-md-1 col-md-5">
            <div className="button-group d-flex justify-content-around">
              <button type="submit" className="btn btn-success" disabled={pristine || submitting}>
                Cadastrar
                        </button>
              <button type="button" className="btn btn-danger" disabled={pristine || submitting}
                onClick={reset}>
                Cancelar
                        </button>
            </div>
          </div>
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