import React, { Component } from "react";
import ServicoForm from "../components/servico/servicoForm";
import Header from "./Header";

class Servico extends Component {
    render() {
        return (
            <div className="page" id="page-wrap">
                <Header />
                <ServicoForm onSubmit={this.onSubmit} />
            </div>)
    }
}

export default Servico;
