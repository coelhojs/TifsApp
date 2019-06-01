import * as lodash from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProdutos } from "../actions/produto";
import ItemProduto from "./itemProduto";

class ListaProdutos extends Component {
    componentWillMount() {
        this.props.fetchProdutos();
    }

    renderProdutos() {
        return lodash.map(this.props.produtos, produtos => {
            return <ItemProduto key={produtos.id} produtos={produtos} />;
        });
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col-2">ID</th>
                        <th scope="col-1">Categoria</th>
                        <th scope="col-2">Marca</th>
                        <th scope="col-2">Linha</th>
                        <th scope="col-3">Descricao</th>
                        <th scope="col">Conteúdo</th>
                        <th scope="col">Medida</th>
                        <th scope="col"><strong>Opções</strong></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderProdutos()}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return { produtos: state.produtos };
}

export default connect(
    mapStateToProps,
    { fetchProdutos }
)(ListaProdutos);
