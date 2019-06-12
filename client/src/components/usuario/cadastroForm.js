import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createUsuario } from '../../actions/usuario';
import { normalizePhone } from "../../validation/normalize";
import { cnpj, email, letters, maxLength15, minLength8, required, tooYoung, unique } from "../../validation/validateFormularios";
import renderField from '../helpers/renderField';

// const validador = require('../validate/validate');
// let history = require("history").createBrowserHistory;

class CadastroForm extends Component {
  onSubmit(props) {
    this.props.createUsuario(props);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div className="cadastro">
        <h4>Criar conta</h4>
        <form className="cadastro-form container-fluid" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div className="form-header">
          </div>
          <div className="row no-gutters" >
            <div className="form-body offset-md-3 col-md-6">
              <label className="required">Nome completo</label>
              <Field className="form-control"
                name="nome"
                component={renderField}
                type="text"
                validate={[minLength8, letters, required]} />

              <label className="required">CNPJ</label>
              <Field className="form-control"
                name="cnpj"
                component={renderField}
                validate={[cnpj, unique, required]}
                type="text"
              // normalize={normalizeCNPJ}
              />
              <label className="required">Telefone</label>
              <Field className="form-control"
                name="telefone"
                component={renderField}
                type="tel"
                normalize={normalizePhone}
                validate={required}
              />
              <label className="required">E-mail</label>
              <Field className="form-control"
                name="email"
                component={renderField}
                type="email"
                validate={[email, required]}
              />
              <label className="required">Data de nascimento</label>
              <Field className="form-control"
                name="dataNascimento"
                component={renderField}
                type="date"
                validate={[tooYoung, required]}
              />
              <label className="required">Senha</label>
              <Field className="form-control"
                name="senha"
                component={renderField}
                type="password"
                validate={[minLength8, maxLength15, required]}
              />
              <label className="required">Repetir senha</label>
              <Field className="form-control"
                name="repetirSenha"
                component={renderField}
                type="password"
                validate={[minLength8, maxLength15, required]}
              />
            </div>
          </div>
          <div className="form-footer row no-gutters">
            <div className="offset-md-3 col-md-6">
              <div className="button-group d-flex justify-content-around">
                <button type="button" className="btn btn-danger" disabled={pristine || submitting}
                  onClick={reset}>
                  Cancelar
                        </button>
                <button type="submit" className="btn btn-success" disabled={pristine || submitting}>
                  Cadastrar
                        </button>
              </div>
              {/* <button className="btn btn-link" onClick={history.push('/')}>
              Voltar para a tela de login
            </button> */}
            </div>
          </div>
        </form >
      </div>
    );
  }
}

export default reduxForm({
  form: 'cadastroForm'
})(
  connect(null, { createUsuario })(CadastroForm)
);