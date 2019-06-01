function validarCnpj(cnpj) {
    if (isNaN(cnpj) || cnpj.lenght != 14) {
        return false;
    }
    return true;
}

function validarCpf(cpf) {
    if (isNaN(cpf) || cpf.lenght != 11) {
        return false;
    }
    return true;
}

function validarNome(nome) {
    if (nome.lenght <= 3) {
        return false;
    }
    return true;
}

module.exports = {
    validarNome: validarNome,
    validarCpf: validarCpf,
    validarCnpj: validarCnpj
};