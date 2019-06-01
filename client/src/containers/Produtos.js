import React, { Component } from 'react';
import ProdutoForm from "../forms/produtoForm";
import ListaProdutos from '../components/listaProdutos';

class Produtos extends Component {
    render() {
        return (
            <div>
                <ProdutoForm onSubmit={this.onSubmit} />
                <ListaProdutos />
            </div>
        );
    }
}

export default Produtos;