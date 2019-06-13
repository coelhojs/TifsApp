import * as lodash from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllClientes } from "../../actions/cliente";
import ItemCliente from "./itemCliente";

class ListaClientes extends Component {
    componentWillMount() {
        this.props.fetchAllClientes();
    }

    renderClientes() {
        return lodash.map(this.props.clientes, clientes => {
            return <ItemCliente key={clientes._id} clientes={clientes} />;
        });
    }

    render() {
        return (
                <div className="row justify-content-between">
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
    { fetchAllClientes }
)(ListaClientes);
