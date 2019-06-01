import React, { Component } from 'react';
import ClienteForm from "../forms/clienteForm";
import ListaClientes from "../components/listaClientes";

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