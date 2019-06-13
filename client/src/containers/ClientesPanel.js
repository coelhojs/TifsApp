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
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title d-flex justify-content-between">
                                <h4>Meus clientes</h4>
                                <button className="btn btn-link" onClick={this.handleClick}>
                                    <i className="fas fa-user-plus fa-2x"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <ListaClientes />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="page container" id="page-wrap">
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title d-flex justify-content-between">
                                <h4>Novo cliente</h4>
                                <button className="btn btn-link" onClick={this.handleClick}>
                                    <i className="fas fa-users fa-2x"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <ClienteForm onSubmit={this.onSubmit} />
                    </div>
                </div>
            );
        }
    }
}

export default ClientesPanel;