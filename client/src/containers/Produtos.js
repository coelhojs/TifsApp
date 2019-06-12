import React, { Component } from 'react';
import ListaProdutos from '../components/produto/listaProdutos';
import ProdutoForm from "../components/produto/produtoForm";
import Header from "./Header";

class Produtos extends Component {
    render() {
        return (
            <div className="page" id="page-wrap">
                <Header />
                <ProdutoForm onSubmit={this.onSubmit} />
                <ListaProdutos />
            </div>
        );
    }
}

export default Produtos;