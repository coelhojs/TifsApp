import React from 'react';
import { createServico, fetchServicos } from '../actions/servico';
import { Field, reduxForm } from 'redux-form';
import '../style/general.scss';
import InputField from '../components/inputField';

const ServicoFormPage1 = (props) => {
    const { handleSubmit, clientes } = props

    return (
        <form onSubmit={handleSubmit}>
            <div className="offset-md-2">
                <div className="form-row">
                    <label className="col-4">Data</label>
                    <div className="col-6">
                        <Field name="data" type="date" component="input" className="form-control" />
                    </div>
                </div>
            </div>
            <br />
            <div className="offset-md-2">
                <div className="form-row">
                    <label className="col-4">Cliente</label>
                    <div className="col-6">
                        <Field name="cliente" className="form-control" component="select">
                            <option key={0}>Selecione um(a) cliente</option>
                            {clientes}
                        </Field></div>
                </div>
            </div>
            <div className="offset-md-2">
                <div className="form-group"></div>
                <label className="col-10" style={{ padding: '0px' }}>Observações sobre o cliente</label>
                <div className="col-10" style={{ padding: '0px' }}>
                    <Field name="anotacoes" className="form-control" component="textarea" />
                </div>
            </div>
            <br/>
            <div className="form__footer text-center">
                <button type="submit" className="btn btn-success buttonService">
                    Próximo
                </button>
            </div>
        </form >

    )
}

export default reduxForm({
    form: 'servicoForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true

})(ServicoFormPage1)