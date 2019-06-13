import React, { Component } from 'react';
import ListaProdutos from '../components/produto/listaProdutos';
import ProdutoForm from "../components/produto/produtoForm";

class ProdutosPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        if (this.state.isToggleOn) {
            return (
                <div className="page container" id="page-wrap">
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title d-flex justify-content-between">
                                <h4>Meus produtos</h4>
                                <button className="btn btn-link" onClick={this.handleClick}>
                                    <i className="fas fa-user-plus fa-2x"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <ListaProdutos />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="page container" id="page-wrap">
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title d-flex justify-content-between">
                                <h4>Novo produto</h4>
                                <button className="btn btn-link" onClick={this.handleClick}>
                                    <i className="fas fa-users fa-2x"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <ProdutoForm onSubmit={this.onSubmit} />
                    </div>
                </div>
            );
        }
    }
}

export default ProdutosPanel;