import React, { Component } from 'react';
import ClienteForm from "../components/cliente/clienteForm";
import ListaClientes from "../components/cliente/listaClientes";

class ClientesPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    render() {
        if (this.state.isToggleOn) {
            return (
                <div className="page container" id="page-wrap">
                    <div className="row no-gutters">
                        <div className="col-12">
                            <button className="btn btn-link">Cadastrar novo cliente</button>
                        </div>
                        <div className="col-12">
                            <ListaClientes />
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="page" id="page-wrap">
                    <ClienteForm onSubmit={this.onSubmit} />
                </div>
            );
        }
    }
}

export default ClientesPanel;