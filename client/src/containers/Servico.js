import React, { Component } from "react";
import ServicoForm from "../forms/servicoForm";

class Servico extends Component {
    render() {
        return (
            <div>
                <ServicoForm onSubmit={this.onSubmit} />
            </div>)
    }
}

export default Servico;
