import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createCliente } from '../../actions/cliente';
import { email, required, minLength8, cpf, letters, number, tooYoung } from "../../validation/validateFormularios";
import { normalizePhone, normalizeCPF } from "../../validation/normalize";
import renderField from '../helpers/renderField';

class ClienteForm extends Component {
	onSubmit(props) {
		this.props.createCliente(props, () => {
		});
	}

	render() {
		const sexo = ["Feminino", "Masculino", "Outro", "Prefiro não informar"];
		const { handleSubmit, pristine, reset, submitting } = this.props;
		return (
			<form className="container" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<div className="form-header text-center">
					<h1>Cadastro de Cliente</h1>
				</div>
				<div className="row no-gutters">
					<div className="form-body offset-md-1 col-md-5">
						<label className="required">Nome completo</label>
						<Field className="renderField"
							name="nome"
							component={renderField}
							type="text"
							validate={[minLength8, letters, required]}
						/>

						<label className="required">Sexo</label>
						<Field name="sexo" className="renderField" component="select">
							{sexo.map(sexoOption =>
								<option value={sexoOption} key={sexoOption}>
									{sexoOption}
								</option>)}
						</Field>

						<label className="required">CPF</label>
						<Field className="renderField"
							name="cpf"
							component={renderField}
							validate={[number, cpf]}
							normalize={normalizeCPF}
							type="text"
						/>

						<label className="required">Data de nascimento</label>
						<Field className="renderField"
							name="dataNascimento"
							component={renderField}
							type="date"
							validate={[tooYoung, required]}
						/>

						<label className="required">Telefone</label>
						<Field className="renderField"
							name="telefone"
							component={renderField}
							type="tel"
							normalize={normalizePhone}
							validate={required}
						/>

						<label className="required">E-mail</label>
						<Field className="renderField"
							name="email"
							component={renderField}
							type="email"
							validate={[email, required]}
						/>
						<br />
						<div className="form-group">
							<label>Você já teve episódios de alergia a algum produto cosmético?</label>
							<div className="d-flex">
								<span className="mr-5">
									<Field name="alergias"
										className="form-check-input"
										component={renderField}
										type="radio"
										value="true" />
									Sim
								</span>

								<span className="">
									<Field name="alergias" className="form-check-input" component={renderField} type="radio"
										value="false" />
									Não
								</span>
							</div>
						</div>

						<div className="form-group">
							<label>Você está em período de gravidez?</label>
							<div className="d-flex">
								<span className="mr-5">
									<Field name="gestante" className="form-check-input" component={renderField} type="radio"
										value="true" />
									Sim
									</span>
								<span>
									<Field name="gestante" className="form-check-input" component={renderField} type="radio"
										value="false" />
									Não
                            		</span>
							</div>
						</div>
					</div>
					<div className="col-md-6 text-center">
						<img src="/img/cadastroImg.svg" alt="" style={{ marginTop: '4rem' }} />
					</div>
					<br />
					<div className="form-footer row no-gutters">
						<div className="offset-md-1 col-md-5">
							<div className="mt-4 button-group d-flex justify-content-around">
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