import React from 'react';

const renderField = ({ input, className, type, meta: { touched, error, warning } }) => {
    return (
        <div>
            <input {...input} type={type} className={className} />
            {touched && ((error && <span className="input-warning">{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    );
};

export default renderField;