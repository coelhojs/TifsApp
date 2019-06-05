import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createCliente } from '../../actions/cliente';
import { email, required, minLength8, maxLength15, cpf, letters, number, tooYoung } from "../../validation/validateFormularios";
import normalizePhone from "../../validation/normalizePhone";
import renderField from '../helpers/renderField';

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
				<div className="text-center">
					<h1>Cadastro de Cliente</h1>
				</div>
				<div className="row">
					<div className="offset-md-1 col-md-5">
						<label>Nome completo</label>
						<Field className="form-control"
							name="nome"
							component={renderField}
							type="text"
							validate={[minLength8, letters, required]}
						/>

						<label>Sexo</label>
						<Field name="sexo" className="form-control" component="select">
							{sexo.map(sexoOption =>
								<option value={sexoOption} key={sexoOption} validate={required}>{sexoOption}</option>)}
						</Field>

						<label>CPF</label>
						<Field className="form-control"
							name="cpf"
							component={renderField}
							validate={[number, cpf]}
							type="text"
						/>

						<label>Data de nascimento</label>
						<Field className="form-control"
							name="dataNascimento"
							component={renderField}
							type="date"
							validate={[tooYoung, required]}
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

						{/* <div className="form-group formCheck"> */}
						<label>Você já teve episódios de alergia a algum produto cosmético?</label>
						<div className="form-check form-check-inline" >
							<span>
								<Field name="alergias"
									className="form-check-input"
									component={renderField}
									type="radio"
									value="true" />
								Sim
							</span>
						</div>
						<div className="form-check form-check-inline" >
							<label className="form-check-label formButton2">
								<Field name="alergias" className="form-check-input" component={renderField} type="radio"
									value="false" />
								Não</label>
						</div>
						<div className="form-group formCheck">
							<label>Você está em período de gravidez?</label>
							<div className="form-check form-check-inline">
								<label className="form-check-label formButton1">
									<Field name="gestante" className="form-check-input" component={renderField} type="radio"
										value="true" />
									Sim</label>
								<label className="form-check-label formButton2">
									<Field name="gestante" className="form-check-input" component={renderField} type="radio"
										value="false" />
									Não
                            </label>
							</div>
						</div>
					</div>
					<div className="col-md-6 text-center">
						<img src="/img/cadastroImg.svg" alt="" style={{ marginTop: '4rem' }} />
					</div>
					<br />
					<div className="offset-md-1 col-md-5">
						<div className="button-group d-flex justify-content-around">
							<button type="button" className="btn btn-danger" disabled={pristine || submitting}
								onClick={reset}>
								Cancelar
                        </button>
							<button type="submit" className="btn btn-success" disabled={pristine || submitting}>
								Cadastrar
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
	form: 'clienteForm'
})(
	connect(null, { createCliente })(ClienteForm)
);