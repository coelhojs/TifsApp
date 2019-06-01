import React, { Component } from 'react';
import CabeleireiroCadastro from "../forms/cabeleireiroCadastro";


class Cadastro extends Component {
    render() {
        return (
            <CabeleireiroCadastro onSubmit={this.onSubmit} />
        );
    }
}

export default Cadastro;