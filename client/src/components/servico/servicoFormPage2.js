import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import MaterialUtilizado from "./materialUtilizado";

const ServicoFormPage2 = (props) => {
    // const { handleSubmit, previousPage, servicos, fields } = props
    const { handleSubmit, previousPage } = props

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-body row no-gutters" >
                <div className="offset-md-3 col-md-6">
                    <div className="form-row">
                        <label className="col-3">Serviço</label>
                        <div className="col-9">
                            <Field name="nome" className="renderField" component="select">
                                <option defaultValue>Selecione um serviço</option>
                                <option value="Escova">Escova</option>
                                <option value="Corte">Corte</option>
                                <option value="Coloração">Coloração</option>
                                <option value="Selagem">Selagem</option>
                                <option value="Mechas">Mechas</option>
                            </Field>
                        </div>
                    </div>
                </div>
            </div>

            <br />

            <div className="row no-gutters" >
                <div className="offset-md-3 col-md-6">
                    <FieldArray name="materiais" component={MaterialUtilizado} />
                    <div className="button-group d-flex justify-content-around">
                        <button type="button" className="btn btn-secondary" onClick={previousPage}>
                            Voltar
                </button>
                        <button type="submit" className="btn btn-success"  >
                            Concluído
                </button>
                    </div>
                </div>
            </div>
        </form >
    )
}

export default reduxForm({
    form: 'servicoForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
})(ServicoFormPage2)