// Template de mensagens de resposta:

module.exports = function (erro, codigo, mensagem, dados) {
    this.erro = erro;
    this.mensagem = mensagem;
    this.codigo = codigo;
    this.dados = dados;
};