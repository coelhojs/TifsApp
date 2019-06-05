// Template de mensagens de resposta:

function Template(erro, codigo, mensagem, dados) {
    this.mensagem = mensagem;
    this.erro = erro;
    this.codigo = codigo;
    this.dados = dados;
}

module.exports = Template;