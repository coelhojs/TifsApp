import React from 'react';
import { Field } from 'redux-form';

const InputField = ({ name, type, label, formGroupClasses, labelClasses, inputClasses, placeholder, value }) => (
    <div className={`form-group ${formGroupClasses}`}>
        <label className="{labelClasses}" style={{ marginRight: '1rem' }}>{label}</label>
        <Field name={name} className={`${inputClasses} form-control`} placeholder={placeholder} component="input" type={type} value={value} />
    </div>
);

export default InputField;