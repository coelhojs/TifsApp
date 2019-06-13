import * as lodash from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllClientes } from "../../actions/cliente";
import ItemCliente from "./itemCliente";
import FichaCliente from "./fichaCliente";

class ListaClientes extends Component {
    componentWillMount() {
        this.props.fetchAllClientes();
    }

    getCliente(id) {
        this.props.fetchCliente(id);
    }

    renderClientes() {
        return lodash.map(this.props.clientes, clientes => {
            return <ItemCliente key={clientes._id} clientes={clientes} />;
        });
    }

    renderDetailedCliente() {
        let clientes = undefined;
        return <FichaCliente clientes={clientes} />
    }

    render() {
        return (
            <div className="container">
                <div className="col-md-7">
                    <div className="list-group">
                        {this.renderClientes()}
                    </div>
                </div>
                <div className="col-md-5">
                    Clique em algum item da lista para exibir os dados completos
                </div>
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
