import React, { Component } from 'react';
import ListaClientes from "../components/cliente/listaClientes";
import ClienteForm from "../components/cliente/clienteForm";

class Clientes extends Component {
    render() {
        return (
            <div>
                <ClienteForm onSubmit={this.onSubmit} />
                <ListaClientes />
            </div>
        );
    }
}

export default Clientes;