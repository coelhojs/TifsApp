import React from "react";
import { Field } from 'redux-form';
import renderField from '../helpers/renderField';

const MaterialUtilizado = ({ fields }) => {
    return (
        <div className="form-body">
            <div className="row no-gutters">
                <div className="col-10">
                    Materiais utilizados
                </div>
                <div className="col-2">
                    <i className="fas fa-plus-circle fa-2x" onClick={() => fields.push()}></i>
                </div>
            </div>

            <br />

            {fields.map((produto, index) => (
                <div key={index}>
                    <div className="row">
                        <div className="col-6">
                            <label>Produto</label>
                            <Field
                                name={`materiais[${index}].nome`} type="text"
                                className="renderField" component={renderField}
                                value={produto} />
                        </div>

                        <div className="col-6">
                            <div className="row no-gutters">
                                <div className="col-4">
                                    <label className="text-right">Medida</label>
                                    <Field
                                        name={`materiais[${index}].quantidade`}
                                        type="text"
                                        className="renderField"
                                        component={renderField}
                                        value={produto}
                                    />
                                </div>
                                <div className="col-4">
                                    <label>Unidade</label>
                                    <Field name={`materiais[${index}].medida`} component="select" className="renderField">
                                        <option value="" defaultValue></option>
                                        <option value="ml">ml</option>
                                        <option value="L">L</option>
                                        <option value="mg">mg</option>
                                        <option value="g">g</option>
                                    </Field>
                                </div>
                                <div className="col-2">
                                    <i class="fas fa-trash-alt" onClick={() => fields.remove(index)} alt="Remover produto"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            ))}
        </div >
    );
};

export default MaterialUtilizado;