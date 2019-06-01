import React, { Component } from 'react';
import * as lodash from "lodash";
import { connect } from 'react-redux';
import { formValueSelector, reduxForm } from 'redux-form';
import { fetchClientes } from '../actions/cliente';
import { createServico, fetchServicos } from '../actions/servico';
import Divider from "../components/divider";
import ServicoFormPage1 from "./servicoFormPage1";
import ServicoFormPage2 from "./servicoFormPage2";

function getDate() {
    var currentTime = new Date(),
        month = '' + (currentTime.getMonth() + 1),
        day = '' + currentTime.getDate(),
        year = currentTime.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

const defaultValues = {
    data: getDate()
}

class ServicoForm extends Component {
    constructor(props) {
        super(props)
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.state = {
            page: 1
        }
    }
    nextPage() {
        this.setState({ page: this.state.page + 1 })
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 })
    }

    componentWillMount() {
        this.props.fetchClientes();
        this.props.fetchServicos();
    }

    renderClientes() {
        return lodash.map(this.props.clientes, clientes => {
            return <option key={clientes.id} value={clientes.nome}>{clientes.nome}</option>;
        });
    }

    renderServicos() {
        let id = 0;
        return lodash.map(this.props.servicos, servicos => {
            return <option key={id++} value={servicos.nome}>{servicos.nome}</option>;
        })
    }

    onSubmit(props) {
        this.props.createServico(props, () => {
            console.log(props);
        });
    }

    render() {
        const { handleSubmit } = this.props;
        //const { renderClientes } = this.props;
        const { page } = this.state
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Cadastro de Serviço</h1>
                </div>
                {page === 1 && <ServicoFormPage1 onSubmit={this.nextPage} clientes={this.renderClientes()} />}
                {page === 2 &&
                    <ServicoFormPage2
                        servicos={this.renderServicos()}
                        previousPage={this.previousPage}
                        onSubmit={handleSubmit(this.onSubmit.bind(this))}
                    />
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    const selector = formValueSelector('servicoForm')
    return {
        initialValues: defaultValues,
        clientes: state.clientes,
        servicos: state.servicos,
        produtos: state.produtos,
        selectedServico: selector(state, 'servico')
    };
}

ServicoForm = reduxForm({
    form: 'servicoForm'
})(ServicoForm)

ServicoForm = connect(
    mapStateToProps, { fetchClientes, createServico, fetchServicos }
)(ServicoForm)

export default ServicoForm