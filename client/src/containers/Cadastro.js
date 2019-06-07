import React, { Component } from 'react';
import CadastroForm from "../components/usuario/cadastroForm";


class Cadastro extends Component {
    render() {
        return (
            <CadastroForm onSubmit={this.onSubmit} />
        );
    }
}

export default Cadastro;