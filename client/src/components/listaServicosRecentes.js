import * as lodash from "lodash";
import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchServicos } from '../actions/servico';
import CardServico from "../components/cardServico";

class ListaServicosRecentes extends Component {
    componentWillMount() {
        this.props.fetchServicos();
    }

    renderServicos() {
        let servicosArray = lodash.map(this.props.servicos, servicos => {
            return <CardServico key={servicos.id} servicos={servicos} />
        });
        // return _.take(servicosArray, 3);
        return lodash.map(servicosArray);
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-between">
                    {this.renderServicos()}
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
    { fetchServicos }
)(ListaServicosRecentes);