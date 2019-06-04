export const maxLength = max => value =>
    value && value.length > max ? `O tamanho máximo para este campo é ${max}` : undefined;
export const minLength = min => value =>
    value && value.length < min ? `O tamanho mínimo para este campo é ${min}` : undefined;

export const required = value => value ? undefined : 'Campo obrigatório';
//setar maxLength?
export const minLength8 = minLength(8);
export const maxLength15 = maxLength(15);
export const length14 = value => value && value.length === 14 ? undefined : "O CNPJ deve ter 14 dígitos ";

export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
export const letters = value => value && !isNaN(Number(value)) ? 'Must be a number' : undefined;
export const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined;
export const minValue18 = minValue(18);
export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Endereço de e-mail inválido' : undefined;
export const tooOld = value =>
    value && value > 65 ? 'You might be too old for this' : undefined;
export const aol = value =>
    value && /.+@aol\.com/.test(value) ?
        'Really? You still use AOL for your email?' : undefined;