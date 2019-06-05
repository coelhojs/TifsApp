import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import renderField from '../helpers/renderField';
import { editCabeleireiro, fetchCabeleireiro } from '../../actions/cabeleireiro';
import { email, required, minLength8, maxLength15, cnpj, letters, number } from "../../validation/validateFormularios";
import normalizePhone from "../../validation/normalizePhone";

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
        <div className="text-center">
          <h1>Cabeleireiro - Editar Cadastro</h1>
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
              validate={[number, cnpj]}
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
              validate={required}
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
  form: 'cabeleireiroEditar'
})(
  connect(null, { fetchCabeleireiro, editCabeleireiro })(CabeleireiroEditar)
);