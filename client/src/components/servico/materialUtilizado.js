import React from "react";
import { Field } from 'redux-form';
import renderField from '../helpers/renderField';

const MaterialUtilizado = ({ fields }) => {
    return (
        <div>
            <div className="row">
                <br />
                <div className="col-8">
                    Materiais utilizados
                </div>
                <div className="col-4">
                    <img style={{ width: '2rem' }} src="/img/icon/add.png" onClick={() => fields.push()} alt="" />
                </div>
            </div>
            <br />

            {fields.map((produto, index) => (
                <div>
                    <div className="row" key={index}>
                        <div>
                            <label>Produto</label>
                            <Field
                                name={`materiais[${index}].nome`} type="text"
                                className="form-control" component={renderField}
                                value={produto} />
                        </div>
                        <div className="">
                            <label>Medida</label>
                            <Field
                                name={`materiais[${index}].quantidade`}
                                type="text"
                                className="form-control col-7"
                                component={renderField}
                                value={produto}
                            />
                            <Field name={`materiais[${index}].medida`} component="select" className="form-control col-5">
                                <option value="" defaultValue></option>
                                <option value="ml">ml</option>
                                <option value="L">L</option>
                                <option value="mg">mg</option>
                                <option value="g">g</option>
                            </Field>
                        </div>
                    </div>
                    <div className="col">
                        <img style={{ width: '2rem' }} src="/img/icon/delete.png" onClick={() => fields.remove(index)} alt="Remover produto" />
                    </div>
                </div>
            ))}
        </div >
    );
};

export default MaterialUtilizado;