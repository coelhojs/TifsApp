import React, { Component } from 'react';
import { fetchServico } from "../actions/servico";
import { connect } from "react-redux";

class VisualizarHistorico extends Component {
    state = {
        user: null
    }
    componentWillMount() {
        const { handle } = this.props.match.params
        //const { fromNotifications } = this.props.location.state
        this.props.fetchServico(handle);
    }

    render() {
        return (
            <div className="container">
                <div className="historico__header">
                    <h1>Detalhes do serviço</h1>
                </div>
                <div className="historico__body card-group">
                    <div className="card">
                        {this.props.servicos.nome}
                        {this.props.servicos.data}
                    </div>
                    <div className="card">
                        {this.props.servicos.cliente}
                    </div>
                </div>
                <div className="historico__footer card">
                    <div className="card-title">Anotações</div>
                    <div className="card-body">{this.props.servicos.anotacoes}</div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return { servicos: state.servicos };
}

export default connect(
    mapStateToProps,
    { fetchServico }
)(VisualizarHistorico);
