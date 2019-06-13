import React from 'react';

const renderField = ({ input, className, placeholder, maxLength, type, meta: { touched, error, warning } }) => {
    return (
        <div>
            <input {...input} type={type} className={className}
                placeholder={placeholder} maxLength={maxLength} />
            {touched && ((error && <span className="input-warning">{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    );
};

export default renderField;