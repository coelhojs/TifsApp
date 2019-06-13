import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from '../helpers/renderField';

const ServicoFormPage1 = (props) => {
    const { handleSubmit, clientes } = props

    return (
        <form onSubmit={handleSubmit}>
            <div className="row no-gutters" >
                <div className="offset-md-3 col-md-3">
                    <label className="col-12">Data</label>
                    <div className="col-12">
                        <Field name="data" type="date" component={renderField} className="renderField" />
                    </div>
                </div>

                <div className="col-md-3">
                    <label className="col-12">Cliente</label>
                    <div className="col-12">
                        <Field name="cliente" className="renderField" component="select">
                            <option key={0}>Selecione um(a) cliente</option>
                            {clientes}
                        </Field>
                    </div>
                </div>
            </div>

            <br />

            <div className="row no-gutters">
                <div className="offset-md-3 col-md-6">
                    <label className="col-12">
                        Observações sobre o cliente
                </label>
                    <div className="col-12">
                        <Field name="anotacoes" className="renderField" component="textarea" rows="5" />
                    </div>
                </div>
            </div>
            <br />
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