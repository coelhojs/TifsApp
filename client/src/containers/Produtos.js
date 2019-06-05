import React, { Component } from 'react';
import ListaProdutos from '../components/produto/listaProdutos';
import ProdutoForm from "../components/produto/produtoForm";

class Produtos extends Component {
    render() {
        return (
            <div>
                <ProdutoForm onSubmit={this.onSubmit} />
                {/* <ListaProdutos /> */}
            </div>
        );
    }
}

export default Produtos;