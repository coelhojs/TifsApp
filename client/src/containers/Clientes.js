import React, { Component } from 'react';
import ClienteForm from "../components/cliente/clienteForm";
import Header from "./Header";
import ListaClientes from "../components/cliente/listaClientes";

class Clientes extends Component {
    render() {
        return (
            <div className="page" id="page-wrap">
                <Header />
                <ClienteForm onSubmit={this.onSubmit} />
                <ListaClientes />
            </div>
        );
    }
}

export default Clientes;