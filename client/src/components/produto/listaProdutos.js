import * as lodash from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllProdutos } from "../../actions/produto";
import ItemProduto from "./itemProduto";

class ListaProdutos extends Component {
    componentWillMount() {
        this.props.fetchAllProdutos();
    }

    renderProdutos() {
        return lodash.map(this.props.produtos, produtos => {
            return <ItemProduto key={produtos._id} produtos={produtos} />;
        });
    }

    render() {
        return (
            <table className="table table-produtos">
                <thead>
                    <tr>
                        <th scope="col-2">Categoria</th>
                        <th scope="col-2">Marca</th>
                        <th scope="col-3">Linha</th>
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
    { fetchAllProdutos }
)(ListaProdutos);
