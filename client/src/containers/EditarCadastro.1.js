import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCabeleireiro, fetchCabeleireiro } from '../actions/cabeleireiro';
import CabeleireiroEditar from "../forms/cabeleireiroEditar";

class EditarCadastro extends Component {
    componentDidMount() {
        this.props.fetchCabeleireiro(this.props.match.params.id);
    }
    onSubmit = formValues => {
        this.props.editCabeleireiro(this.props.match.params.id, formValues);
    };

    render() {
        if (!this.props.cabeleireiro) {
            return <div>Carregando...</div>;
        }

        return (
            <CabeleireiroEditar
                initialValues={_.pick(this.props.cabeleireiros, 'nome', 'sobrenome', 'cnpj', 'telefone', 'email', 'dataNascimento', 'senha', 'repetirSenha')}
                onSubmit={this.onSubmit} />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { cabeleireiros: state.cabeleireiros[ownProps.match.params.id] };
};

export default connect(
    mapStateToProps,
    { fetchCabeleireiro, editCabeleireiro }
)(EditarCadastro);