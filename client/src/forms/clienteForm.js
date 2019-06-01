import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createCliente } from '../actions/cliente';
import InputField from "../components/inputField";
import '../style/general.scss';

let history = require("history").createBrowserHistory;

class ClienteForm extends Component {
    onSubmit(props) {
        this.props.createCliente(props, () => {
            history.push('/');
        });
    }

    render() {
        const sexo = ["Feminino", "Masculino", "Outro", "Prefiro não informar"];
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <form className="container" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <span style={{ display: 'none' }}>
                    <Field name="id" value="0" component="input" type="text" />
                </span>
                <div className="text-center"><h1>Cadastro de Cliente</h1></div>
                <hr />
                <div className="form-group row">
                    <label className="col-2">Nome</label>
                    <div className="col-10">
                        <Field name="nome" className="form-control" component="input" type="text"
                            placeholder="Nome completo"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-2">Sexo</label>
                    <div className="col-10">
                        <Field name="sexo" className="form-control" component="select">
                            {sexo.map(sexoOption =>
                                <option value={sexoOption} key={sexoOption}>{sexoOption}</option>)}
                        </Field></div>
                </div>
                <div className="form-group row">
                    <label className="col-2">CPF</label>
                    <div className="col-10">
                        {/* <InputMask mask="999.999.999-99" name="cpf" className="form-control" component="input" type="text" placeholder="" /> */}
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-4">Data de nascimento</label>
                    <div className="col-8">
                        <Field name="dataNascimento" className="form-control" component="input" type="date"
                            placeholder="" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-2">Telefone</label>
                    <div className="col-10">
                        {/* <InputMask id="telefone" mask="(99) 9999-9999" name="telefone" className="form-control" component="input" type="tel" */}
                            placeholder="" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-2">E-mail</label>
                    <div className="col-10">
                        <Field name="email" className="form-control" component="input" type="email" placeholder="" />
                    </div>
                </div>
                <div className="form-group formCheck">
                    <label className="col-12">Você já teve episódios de alergia a algum produto cosmético?</label>
                    <div className="form-check form-check-inline" >
                        <label className="form-check-label formButton1">
                            <Field name="alergias" className="form-check-input" component="input" type="radio"
                                value="true" />
                            Sim</label>
                        <label className="form-check-label formButton2">
                            <Field name="alergias" className="form-check-input" component="input" type="radio"
                                value="false" />
                            Não</label>
                    </div>
                </div>
                <div className="form-group formCheck">
                    <label className="col-12">Você está em período de gravidez?</label>
                    <div className="form-check form-check-inline">
                        <label className="form-check-label formButton1">
                            <Field name="gestante" className="form-check-input" component="input" type="radio"
                                value="true" />
                            Sim</label>
                        <label className="form-check-label formButton2">
                            <Field name="gestante" className="form-check-input" component="input" type="radio"
                                value="false" />
                            Não
                            </label>
                    </div>
                </div>
                <br />
                <div className="button-group d-flex justify-content-around">
                    <button type="submit" className="btn btn-success" disabled={pristine || submitting}>
                        Cadastrar
                        </button>
                    <button type="button" className="btn btn-danger" disabled={pristine || submitting}
                        onClick={reset}>
                        Cancelar
                        </button>
                </div>
                <br />
            </form>
        );
    }
}

export default reduxForm({
    form: 'clienteForm'
})(
    connect(null, { createCliente })(ClienteForm)
);