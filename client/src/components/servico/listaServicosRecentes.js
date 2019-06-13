import * as lodash from "lodash";
import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchAllServicos } from '../../actions/servico';
import CardServico from "./cardServico";

class ListaServicosRecentes extends Component {
    componentWillMount() {
        this.props.fetchAllServicos();
    }

    renderServicos() {
        let servicosArray = lodash.map(this.props.servicos, servicos => {
            return <CardServico key={servicos._id} servicos={servicos} />
        });
        // return _.take(servicosArray, 3);
        return lodash.map(servicosArray);
    }

    render() {
        return (
            <div className="row justify-content-between">
                {this.renderServicos()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { servicos: state.servicos };
}

export default connect(
    mapStateToProps,
    { fetchAllServicos }
)(ListaServicosRecentes);