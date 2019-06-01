import * as lodash from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchClientes } from "../actions/cliente";
import ItemCliente from "./itemCliente";

class ListaClientes extends Component {
    componentWillMount() {
        this.props.fetchClientes();
    }

    renderClientes() {
        return lodash.map(this.props.clientes, clientes => {
            return <ItemCliente key={clientes.id} clientes={clientes} />;
        });
    }

    render() {
        return (
            <div className="list-group" style={{ marginBottom: '2rem' }}>
                {this.renderClientes()}

            </div>
        );
    }
}

function mapStateToProps(state) {
    return { clientes: state.clientes };
}

export default connect(
    mapStateToProps,
    { fetchClientes }
)(ListaClientes);
