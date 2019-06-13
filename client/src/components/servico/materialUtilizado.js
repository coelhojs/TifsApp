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
                    <img style={{ width: '2rem' }} src="/img/icon/add.png" onClick={() => fields.push()} alt="" />
                </div>
            </div>

            <br />

            {fields.map((produto, index) => (
                <div>
                    <div className="row no-gutters" key={index}>
                        <div className="col-5">
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
                                    <img style={{ width: '2rem' }} src="/img/icon/delete.png" onClick={() => fields.remove(index)} alt="Remover produto" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div >
    );
};

export default MaterialUtilizado;